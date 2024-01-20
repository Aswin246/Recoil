import { atom, selector } from "recoil";
export const NotificationBar = atom({
  key: "NotificationBar",
  default: {
    network: 104,
    jobs: 6,
    messaging: 3,
    notifications: 3,
  },
});

export const Sum = selector({
  key: "Sum",
  get: ({ get }) => {
    const notification = get(NotificationBar);
    return (
      notification.network +
      notification.jobs +
      notification.messaging +
      notification.notifications
    );
  },
});
