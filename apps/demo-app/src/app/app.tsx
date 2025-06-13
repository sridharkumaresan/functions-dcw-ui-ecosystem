import { FluidText, TypographyProvider } from '@functions/dcw-react-typography';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Button } from '@functions/dcw-react-atoms';

export function App() {
  return (
    <div>
      <FluentProvider theme={webLightTheme}>
      <TypographyProvider
        overrides={{
          // optional: tweak a fluid token on the fly
          fluid: {
            Body1: {
              minSize: 18,
              maxSize: 24,
              unit: 'px',
              fontWeight: 400,
              lineHeight: 1.6,
            },
          },
        }}
      >
        <div className="app-container">
          <FluidText preset="title" as="h1">
            Typography Library Demo
          </FluidText>
          <FluidText preset="body1">
            This is a sample paragraph using the <code>body1</code> preset.
          </FluidText>
          <FluidText preset="body2">
            And here’s some <strong>body2</strong> text with a lower scale.
          </FluidText>
          <FluidText preset="caption" as="small">
            A tiny caption style.
          </FluidText>
        </div>
        <div className="app-container">
          <div style={{ marginTop: '1.5rem' }}>
            <Button
              variant="primary"
              onClick={() => alert('Primary Button clicked')}
            >
              Primary Button
            </Button>
            <Button
              variant="secondary"
              onClick={() => alert('Secondary Button clicked')}
              style={{ marginLeft: '1rem' }}
            >
              Secondary Button
            </Button>
          </div>
        </div>
      </TypographyProvider>
      </FluentProvider>
    </div>
  );
}

export default App;
