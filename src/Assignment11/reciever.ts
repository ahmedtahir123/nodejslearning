import * as amqp from "amqplib/callback_api";
import sendMail  from "./emailService";
import { BlogComment } from "./sender";

 const emailQueue = (): void => {
  amqp.connect("amqp://localhost",  (error, connection) => {
    connection.createChannel( (error, channel) => {
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
      connection.close();
    });
  });
}

export default emailQueue;
