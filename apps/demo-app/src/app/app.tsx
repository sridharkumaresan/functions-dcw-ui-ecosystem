import { FluidText, TypographyProvider } from '@functions/dcw-react-typography';
// import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { ThemeProvider, useTheme } from '@functions/dcw-react-theme';
import { TextInput } from '@functions/dcw-react-atoms';
import { Button } from '@functions/dcw-react-atoms';
import { PartialTheme } from '@fluentui/react-components';
import { HeroBanner } from '@functions/dcw-react-organisms-hero-banner';

const customFluentOverrides: PartialTheme = {
  // these slot names come from webLightTheme
  colorBrandBackground: '#FF5722',
  colorBrandForeground1: '#FFFFFF',
  colorNeutralBackground1: '#EEEEEE',
};

export function App() {
  const { colors, spacing } = useTheme();
  return (
    <div>
      <ThemeProvider
        fluentCssVarOverrides={{
          '--colorNeutralStrokeAccessiblePressed': '#FF5722',
          '--colorNeutralStroke1Pressed': '#FF5722',
        }}
        fluentThemeOverrides={customFluentOverrides}
        colorOverrides={{ brandPrimary: '#FF5722' }}
        spacingOverrides={{ md: 20 }}
      >
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
          <div className="app-container">
            <div
              style={{
                maxWidth: '400px',
                margin: '4rem auto',
                padding: `${spacing.md}px`,
                backgroundColor: colors.neutralLight,
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <FluidText preset="caption" as="small">
                A tiny caption style.
              </FluidText>
              <TextInput
                id="demo-input"
                placeholder="Enter your name"
                marginBottomKey="md"
              />
            </div>
          </div>
          <div className="app-container">
            <div style={{ display: 'grid', gap: 64, padding: 32 }}>
              {/* V1: default color (no background prop) */}
              <HeroBanner
                title="Default Theme Color"
                subtitle="Minimal height with default brand color"
                primaryAction={{ label: 'Action', onClick: () => {} }}
              />

              {/* V2: explicit color combo */}
              <HeroBanner
                layout="color"
                background={{ type: 'preset', preset: 'orange' }}
                title="Orange Preset"
                subtitle="Dark-grey text on vibrant orange"
                primaryAction={{ label: 'Get Started', onClick: () => {} }}
              />

              {/* V3: full-bleed background image */}
              <HeroBanner
                layout="fullImage"
                background={{
                  type: 'image',
                  url: 'https://picsum.photos/1200/400',
                }}
                title="Full-Bleed Image"
                subtitle="A stunning hero photo"
                primaryAction={{ label: 'Explore', onClick: () => {} }}
              />

              {/* V4: split with right-side image */}
              <HeroBanner
                layout="split"
                background={{
                  type: 'image',
                  url: 'https://picsum.photos/600/400',
                }}
                title="Split (Image Right)"
                subtitle="Content left, image right"
                primaryAction={{ label: 'Learn More', onClick: () => {} }}
              />

              {/* V4-alt: split-reverse (image left) */}
              <HeroBanner
                layout="split-reverse"
                background={{
                  type: 'image',
                  url: 'https://picsum.photos/600/400?grayscale',
                }}
                title="Split-Reverse (Image Left)"
                subtitle="Image left, content right"
                primaryAction={{ label: 'Details', onClick: () => {} }}
              />

              {/* V5: compact version (height=30vh) */}
              <HeroBanner
                layout="default"
                size="compact"
                title="Compact Version"
                subtitle="Shorter height, minimal design"
                primaryAction={{ label: 'OK', onClick: () => {} }}
              />

              {/* V6: split + injected SearchBar, responsive */}
              <HeroBanner
                layout="split"
                background={{
                  type: 'image',
                  url: 'https://picsum.photos/600/400?blur',
                }}
                title="Split + Search"
                subtitle="On mobile the image drops below"
                primaryAction={{ label: 'Search', onClick: () => {} }}
              >
                <div style={{ margin: 'var(--spacing-md) 0' }}>
                  <TextInput placeholder="Search intranet…" />
                </div>
              </HeroBanner>
            </div>
          </div>
        </TypographyProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
