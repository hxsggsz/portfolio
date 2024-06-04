import wallpapperLight from '@/assets/images/wallpapper-light.png';

export const Desktop = ({ children }: React.PropsWithChildren) => {
  return (
    <main
      style={{
        background: `url(${wallpapperLight.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className="h-screen bg-base"
    >
      {children}
    </main>
  );
};
