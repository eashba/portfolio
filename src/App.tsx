import eLogo from "./assets/e-white.svg";
import planetsImage from "./assets/planets-image.png";
import namesImage from "./assets/names-image.png";
import "./App.css";
import { StyledLink } from "./components/styled-link";
import { ContentDateBlock } from "./components/content-date-block";
import { SectionHeader } from "./components/section-header";
import { ProjectBlock } from "./components/project-block";
import { Footer } from "./components/footer";
import "@fontsource/inter";

function App() {
    return (
        <div className="max-w-lg px-12 pt-48 m-auto">
            <div className="w-10 avatar">
                <img src={eLogo} />
            </div>

            <div className="mt-3">Evan Ashba - Software Engineer</div>
            <div className="flex justify-start mt-1 space-x-10 text-xs">
                <StyledLink url="https://www.linkedin.com/in/evan-ashba/">linkedin</StyledLink>
                <StyledLink url="https://github.com/eashba">github</StyledLink>
                <StyledLink url="mailto:contact@eashba.com">contact@eashba.com</StyledLink>
            </div>

            <SectionHeader text="About" />
            <p className="mt-3">Hey there, I'm Evan 👋 </p>
            <p className="mt-3">
                I like building things. Currently, I'm at{" "}
                <StyledLink url="https://articulate.com/">articulāte</StyledLink>, helping to build the #1 creator
                platform for workplace learning.
            </p>
            <p className="mt-3">
                When I'm not programming, I like to drink pu'erh tea and spend time with my partner and our two cats.
            </p>

            <SectionHeader text="Professional History" />

            <ContentDateBlock
                titleElement={<StyledLink url="https://articulate.com/">articulāte</StyledLink>}
                dateRange="2023 - present"
                role="Software Engineer II"
            />

            <ContentDateBlock
                titleElement={<StyledLink url="https://www.fresh.technology/">fresh</StyledLink>}
                dateRange="2021 - 2023"
                role="Software Engineer"
            />

            <ContentDateBlock
                titleElement={<StyledLink url="https://workwithgrid.com/">grid, llc</StyledLink>}
                dateRange="2020 - 2021"
                role="Software Engineer"
            />

            <ContentDateBlock
                titleElement={<StyledLink url="https://workwithgrid.com/">grid, llc</StyledLink>}
                dateRange="2016 - 2020"
                role="Co-op Developer"
            />

            <SectionHeader text="Education" />

            <ContentDateBlock
                titleElement={<p>Kettering University</p>}
                description="Flint, MI"
                secondaryDescription="BS in Computer Science"
                dateRange="2016 - 2021"
            />

            <SectionHeader text="Personal Work" />

            <p className="mt-3 mb-6">Here are things I've built for fun. Some are more useful than others.</p>

            <ProjectBlock
                image={planetsImage}
                title="planets-generator"
                description="Stylized 3D procedural planet generation with three.js and custom GLSL shaders."
                url="https://planets-generator.vercel.app/"
                githubUrl="https://github.com/eashba/planets-generator"
            ></ProjectBlock>

            <ProjectBlock
                image={namesImage}
                title="markovs-names"
                description="A procedural name generator that generates new, original names based on existing datasets. "
                url="https://markovs-names.vercel.app/"
                githubUrl="https://github.com/eashba/markovs-names"
            ></ProjectBlock>

            <Footer />
        </div>
    );
}

export default App;
