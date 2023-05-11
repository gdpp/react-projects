import { ThemeProvider, createGlobalStyle } from 'styled-components';
import StyledButton, {
    FancyButton,
    SubmitButton,
    DarkButton,
} from './components/Button/Button';
import StyledH1 from './components/H1';

const theme = {
    dark: {
        primary: '#2a2a2a',
        text: '#ffffff',
    },
    light: {
        primary: '#ffffff',
        text: '#2a2a2a',
    },
};

const GlobalStyle = createGlobalStyle`
    button{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    }    
`;

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div>
                <StyledH1>Styled H1 App</StyledH1>
                <StyledButton type="submit">Styled Button</StyledButton>
                <div>
                    <br />
                </div>
                <StyledButton variant="outline">
                    Styled Button Outlined
                </StyledButton>
                <div>
                    <br />
                </div>
                <FancyButton as="a">Fancy Button extends</FancyButton>
                <div>
                    <br />
                </div>
                <SubmitButton>Submit</SubmitButton>
                <div>
                    <br />
                </div>
                <DarkButton>Dark Mode</DarkButton>
            </div>
        </ThemeProvider>
    );
};
