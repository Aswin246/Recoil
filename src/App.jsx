import { useRecoilValue } from "recoil";
import { NotificationBar, Sum } from "./atoms";
import { RecoilRoot } from "recoil";

import "./App.css";

function App() {
  return (
    <>
      <RecoilRoot>
        <Notification />
      </RecoilRoot>
    </>
  );
}

function Notification() {
  const notificationBar = useRecoilValue(NotificationBar);
  const sum = useRecoilValue(Sum);

  return (
    <>
      <button>
        Network (
        {notificationBar.network >= 100 ? "99+" : notificationBar.network})
      </button>
      <button>Jobs ({notificationBar.jobs})</button>
      <button>Messaging ({notificationBar.messaging})</button>
      <button>Notifications ({notificationBar.notifications})</button>
      <button>Sum ({sum})</button>
    </>
  );
}
export default App;
