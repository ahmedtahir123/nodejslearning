import * as amqp from "amqplib/callback_api";
import sendMail  from "./emailService";
import { BlogComment } from "./sender";

 const emailQueue = (): void => {
  amqp.connect("amqp://localhost", function (error, connection) {
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      const queue = "email_queue";
      channel.assertQueue(queue, {
        durable: false,
      });
      channel.consume(
        queue,
        function (msg) {
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
