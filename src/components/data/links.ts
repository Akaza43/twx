interface DomainConfig {
  hostname: string;
  url: string;
  openInNewTab: boolean;
}

export const domainConfigs: DomainConfig[] = [
  {
    hostname: '',
    url: 'https:/www.sektecrypto.my.id/',
    openInNewTab: true
  },
  {
    hostname: 'app.sektecrypto.my.id',
    url: 'https:/www.sektecrypto.my.id/',
    openInNewTab: true
  },
];

export const getKomunitasLink = () => {
  if (typeof window !== 'undefined') {
    const config = domainConfigs.find(d => d.hostname === window.location.hostname);
    return config?.url || '/profile';
  }
  return '/profile';
};

export const navigationLinks = {
  home: "/",
  research: "/profile",
  komunitas: getKomunitasLink(),
};
