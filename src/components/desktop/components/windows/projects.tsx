import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { cn } from '@/utils/cn';

export const Projects = () => {
  const button = usePrimaryColor('bg', 'focus-within');
  const card = usePrimaryColor('border');

  return (
    <div
      className={cn(
        'block w-full justify-center gap-2 rounded-md p-2 md:flex',
        card.className
      )}
    >
      <p className="h-40 w-full min-w-40 rounded-md bg-rose">imagem</p>

      <div className="flex flex-col justify-between">
        <div>
          <p className="whitespace-nowrap text-xl font-bold">
            titulo do projeto
          </p>

          <p className="max-h-10 overflow-hidden text-ellipsis whitespace-break-spaces text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            rutrum leo ac nunc pharetra, eu hendrerit tortor vulputate. Nam
            blandit
          </p>
        </div>

        <div className="space-x-2">
          <button className={cn('p-2 rounded-md', button.className)}>
            deploy
          </button>

          <button className={cn('p-2 rounded-md', button.className)}>
            github
          </button>
        </div>
      </div>
    </div>
  );
};
