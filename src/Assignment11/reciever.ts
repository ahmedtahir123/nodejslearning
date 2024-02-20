import * as amqp from "amqplib/callback_api";
import sendMail  from "./emailService";
import { BlogComment } from "./sender";

 const emailQueue = (): void => {
  amqp.connect("amqp://localhost", function (error: any, connection: { createChannel: (arg0: (error1: any, channel: any) => void) => void; }) {
    connection.createChannel(function (error1: any, channel: { assertQueue: (arg0: string, arg1: { durable: boolean; }) => void; consume: (arg0: string, arg1: (msg: any) => void, arg2: { noAck: boolean; }) => void; ack: (arg0: any) => void; }) {
      if (error1) {
        throw error1;
      }
      const queue = "email";
      channel.assertQueue(queue, {
        durable: false,
      });
      channel.consume(
        queue,
         (msg: any) => {
          if (msg) {
            const comment: BlogComment = JSON.parse(msg.content.toString());
            sendMail(comment);
            channel.ack(msg);
          }
        },
        {
          noAck: false,
        }
      );
    });
  });
}

export default emailQueue;
