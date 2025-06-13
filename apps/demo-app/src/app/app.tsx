import {
  FluidText,
  TypographyProvider,
} from '@functions/dcw-react-typography';

export function App() {
  return (
    <div>
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
      </TypographyProvider>
    </div>
  );
}

export default App;