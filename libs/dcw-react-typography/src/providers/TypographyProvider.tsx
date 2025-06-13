import { createContext, ReactNode, useContext } from 'react';
import { typographyTokens, TypographyTokens } from '../tokens/typographyTokens';

export type TypographyOverrides = {
  fluid?: {
    [K in keyof TypographyTokens['fluid']]?: Partial<
      TypographyTokens['fluid'][K]
    >;
  };
  static?: {
    [K in keyof TypographyTokens['static']]?: Partial<
      TypographyTokens['static'][K]
    >;
  };
};

interface TypographyProviderProps {
  children: ReactNode;
  overrides?: TypographyOverrides;
}

const TypographyContext = createContext<TypographyTokens>(typographyTokens);

export const TypographyProvider = ({
  children,
  overrides = {},
}: TypographyProviderProps) => {
  const { fluid: baseFluid, static: baseStatic } = typographyTokens;

  const mergedFluid = Object.fromEntries(
    Object.entries(baseFluid).map(([key, token]) => [
      key,
      { ...token, ...(overrides.fluid?.[key as keyof typeof baseFluid] ?? {}) },
    ])
  ) as TypographyTokens['fluid'];

  const mergedStatic = Object.fromEntries(
    Object.entries(baseStatic).map(([key, token]) => [
      key,
      {
        ...token,
        ...(overrides.static?.[key as keyof typeof baseStatic] ?? {}),
      },
    ])
  ) as TypographyTokens['static'];

  return (
    <TypographyContext.Provider
      value={{ fluid: mergedFluid, static: mergedStatic }}
    >
      {children}
    </TypographyContext.Provider>
  );
};

export const useTypographyTokens = () => useContext(TypographyContext);
