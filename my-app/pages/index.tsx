import ConsoleList from '../components/CategoryLists';
import Header from "../components/Header";


const TopPage = () => {
  return (
    <div>
      <div key="content">
        <Header />
      </div>
      <div>
        <div key='sidebar'>
          <ConsoleList />
        </div>
      </div>
    </div>


  );
};

export default TopPage;

