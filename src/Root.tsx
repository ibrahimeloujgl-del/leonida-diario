import { Composition, Folder } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";
import { Title } from "./HelloWorld/Title";
import { Curiosidades, CURIOSIDADES_DURATION } from "./Gta6/Curiosidades";
import { Still } from "remotion";
import { Avatar, Banner } from "./Gta6/Branding";
import { Episodio, episodeDuration } from "./Gta6/Episodio";
import { ep2 } from "./Gta6/episodios/ep2";
import { ep3 } from "./Gta6/episodios/ep3";
import { ep4 } from "./Gta6/episodios/ep4";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GTA6Curiosidades"
        component={Curiosidades}
        durationInFrames={CURIOSIDADES_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="Cuenta-atras">
        <Composition
          id="Ep2-Personajes"
          component={Episodio}
          durationInFrames={episodeDuration(ep2)}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ ep: ep2 }}
        />
        <Composition
          id="Ep3-Regiones"
          component={Episodio}
          durationInFrames={episodeDuration(ep3)}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ ep: ep3 }}
        />
        <Composition
          id="Ep4-Historia"
          component={Episodio}
          durationInFrames={episodeDuration(ep4)}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ ep: ep4 }}
        />
      </Folder>
      <Folder name="Canal">
        <Still id="Avatar" component={Avatar} width={800} height={800} />
        <Still id="Banner" component={Banner} width={2560} height={1440} />
      </Folder>
      <Folder name="Elements">
        <Composition
          id="Logo"
          component={Logo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            logoColor1: "#91EAE4",
            logoColor2: "#86A8E7",
          }}
        />
        <Composition
          id="Title"
          component={Title}
          durationInFrames={115}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            titleText: "Welcome to Remotion",
            titleColor: "#000000",
          }}
        />
      </Folder>
      <Composition
        // You can take the "id" to render a video:
        // bunx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
        }}
      />

    </>
  );
};
