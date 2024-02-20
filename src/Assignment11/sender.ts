import * as amqp from "amqplib/callback_api";

export interface BlogComment {
  postId: string;
  authorId: string;
  text: string;
}

 const  emailNotificationService = (comment: BlogComment): void =>  {
  amqp.connect("amqp://localhost",  (error: any, connection: { createChannel: (arg0: (error1: any, channel: any) => void) => void; close: () => void; }) => {
    connection.createChannel( (error1: any, channel: { assertQueue: (arg0: string, arg1: { durable: boolean; }) => void; sendToQueue: (arg0: string, arg1: Buffer) => void; }) => {
      if (error1) {
        throw error1;
      }
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
