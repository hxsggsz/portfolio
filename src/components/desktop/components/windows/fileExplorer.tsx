import type { DefaultWindowProps } from '@/types/windows';

import { Window } from './window';

export const FileExplorer = (props: DefaultWindowProps) => {
  return (
    <Window id={props.id} name="file explorer">
      teste
    </Window>
  );
};
