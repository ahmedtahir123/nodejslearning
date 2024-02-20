import * as amqp from "amqplib/callback_api";

export interface BlogComment {
  postId: string;
  authorId: string;
  text: string;
}

 const  emailNotificationService = (comment: BlogComment): void =>  {
  amqp.connect("amqp://localhost",  (error, connection) => {
    connection.createChannel( (error1, channel) => {
      if (error1) {
        throw error1;
      }
      const queue = "email_queue";
      channel.assertQueue(queue, {
        durable: false,
      });
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(comment)));
    });
    setTimeout(function () {
      connection.close();
    }, 500);
  });
}

export default emailNotificationService;
