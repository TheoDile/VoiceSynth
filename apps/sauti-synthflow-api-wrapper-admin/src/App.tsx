import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VoiceAssistantList } from "./voiceAssistant/VoiceAssistantList";
import { VoiceAssistantCreate } from "./voiceAssistant/VoiceAssistantCreate";
import { VoiceAssistantEdit } from "./voiceAssistant/VoiceAssistantEdit";
import { VoiceAssistantShow } from "./voiceAssistant/VoiceAssistantShow";
import { CallList } from "./call/CallList";
import { CallCreate } from "./call/CallCreate";
import { CallEdit } from "./call/CallEdit";
import { CallShow } from "./call/CallShow";
import { PostCallActionList } from "./postCallAction/PostCallActionList";
import { PostCallActionCreate } from "./postCallAction/PostCallActionCreate";
import { PostCallActionEdit } from "./postCallAction/PostCallActionEdit";
import { PostCallActionShow } from "./postCallAction/PostCallActionShow";
import { IntegrationList } from "./integration/IntegrationList";
import { IntegrationCreate } from "./integration/IntegrationCreate";
import { IntegrationEdit } from "./integration/IntegrationEdit";
import { IntegrationShow } from "./integration/IntegrationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Sauti-Synthflow API Wrapper"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="VoiceAssistant"
          list={VoiceAssistantList}
          edit={VoiceAssistantEdit}
          create={VoiceAssistantCreate}
          show={VoiceAssistantShow}
        />
        <Resource
          name="Call"
          list={CallList}
          edit={CallEdit}
          create={CallCreate}
          show={CallShow}
        />
        <Resource
          name="PostCallAction"
          list={PostCallActionList}
          edit={PostCallActionEdit}
          create={PostCallActionCreate}
          show={PostCallActionShow}
        />
        <Resource
          name="Integration"
          list={IntegrationList}
          edit={IntegrationEdit}
          create={IntegrationCreate}
          show={IntegrationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
