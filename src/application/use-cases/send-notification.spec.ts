import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe("Send notification", () => {
  it("should be able to send a notification", async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      recipientId: "example-recipient-id",
      content: "This is a Notification",
      category: "social",
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
