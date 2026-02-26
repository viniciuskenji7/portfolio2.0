import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] p-[2px] ${className}`} // p-[2px] cria o espaço da borda
      {...(rest as any)}
    >
      <div
        className="absolute w-[300%] h-[100%] opacity-100 -bottom-10 right-[-50%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[100%] opacity-100 -top-10 left-[-50%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
          animationDuration: speed
        }}
      ></div>

      {/* O segredo está em manter o fundo aqui, mas com o padding do pai revelando o que está atrás */}
      <div className="relative z-10 bg-black text-white text-center rounded-[18px] h-full w-full">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
