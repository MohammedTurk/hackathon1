import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { Button } from "components";

const Home = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  return (
    <Card>
      <h1 className="text-3xl font-bold underline text-blue">Hello world!</h1>
      <h1 className="text-3xl font-bold underline text-blue-light">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline text-blue-dark">
        Hello world!
      </h1>
      <Button onClick={logout}>Logout</Button>
      <h1 className="text-3xl font-bold underline text-blue-900">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Card>
  );
};

Home.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
};

export default Home;
