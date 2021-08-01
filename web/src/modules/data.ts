import { reactive, shallowReactive } from 'vue';
import { connect } from '@mfro/simpledata/web';
import { model, DataInstance } from 'common';

export interface Context {
  user: string | null;
  data: DataInstance | null;
}

export function initData(remote: string) {
  const url = new URL(location.href);
  const user = url.searchParams.get('user');

  const context: Context = shallowReactive({
    user,
    data: null,
  });

  connect(model, remote).then(data => {
    data.state = reactive(data.state);
    context.data = data;
  });

  return context;
}
