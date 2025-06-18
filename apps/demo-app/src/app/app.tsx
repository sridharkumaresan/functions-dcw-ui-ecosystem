import { FluidText, TypographyProvider } from '@functions/dcw-react-typography';
// import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { ThemeProvider, useTheme } from '@functions/dcw-react-theme';
import { TextInput } from '@functions/dcw-react-atoms';
import { Button } from '@functions/dcw-react-atoms';
import { PartialTheme } from '@fluentui/react-components';
import { HeroBanner } from '@functions/dcw-react-organisms-hero-banner';
import { Add24Filled, Dismiss24Regular } from '@fluentui/react-icons';

const customFluentOverrides: PartialTheme = {
  // these slot names come from webLightTheme
  colorBrandBackground: '#FF5722',
  colorBrandForeground1: '#FFFFFF',
  colorNeutralBackground1: '#EEEEEE',
};
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h2>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {children}
    </div>
  </section>
);
export function App() {
  const { colors, spacing } = useTheme();
  const handleClick = () => alert('You clicked the button!');
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
              <Section title="Primary & Secondary">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </Section>

              <Section title="Sizes">
                <Button colorPreset="mint">Mint Button</Button>
                <Button
                  colorPreset="brightClaret"
                  size="lg"
                  shape="circular"
                  icon={<Add24Filled />}
                />
                <Button colorPreset="orange" variant="secondary">
                  Orange Secondary
                </Button>
              </Section>

              <Section title="Shapes">
                <Button shape="rounded">Rounded</Button>
                <Button shape="square">Square</Button>
                <Button shape="circular" icon={<Add24Filled />} />
              </Section>

              <Section title="Icon Buttons">
                <Button icon={<Add24Filled />} iconPosition="before">
                  Add Item
                </Button>
                <Button icon={<Dismiss24Regular />} iconPosition="after">
                  Remove
                </Button>
              </Section>

              <Section title="Stateful">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth>Full Width</Button>
              </Section>
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
