import { ui, defaultLang } from './translations';

export function t(key: string, lang: string = defaultLang): string {
  const langData = ui[lang as keyof typeof ui] || ui[defaultLang];
  return langData[key as keyof typeof langData] || key;
}
