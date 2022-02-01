import IssueStore from "./mobx/IssueStore";
import IssueForm from "./mobx/IssueForm";
import UserList from "./mobx/UserList";

const App = () => {

  return (
    <div>
      <IssueStore>
        <IssueForm />
        <UserList />
      </IssueStore>
    </div>
  );
}

export default App;
