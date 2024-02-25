import * as amqp from "amqplib/callback_api";

export interface BlogComment {
  postId: string;
  authorId: string;
  text: string;
}

 const  emailNotificationService = (comment: BlogComment): void =>  {
  amqp.connect("amqp://localhost",  (error, connection) => {
    connection.createChannel( (error, channel) => {
      const queue = "email";
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
