'use client';
import * as drawer from '@zag-js/drawer';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { useDrawerStackStore } from './use-drawer-stack-store.js';

const useDrawer = (props) => {
  const id = useId();
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const stack = useDrawerStackStore();
  const context = {
    id,
    dir,
    getRootNode,
    stack,
    ...props
  };
  const service = useMachine(drawer.machine, context);
  return drawer.connect(service, normalizeProps);
};

export { useDrawer };
