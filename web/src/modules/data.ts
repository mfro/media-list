import { markRaw, reactive, shallowReactive } from 'vue';
import { connect } from '@mfro/simpledata/web';
import { model, DataInstance } from 'common';

export interface Context {
  data: DataInstance | null;
}

// function setup(remote: string): Promise<Data> {
//   const protocol = location.protocol == 'https:' ? 'wss' : 'ws';
//   const ws = new WebSocket(`${protocol}://${remote}`);

//   let data: any = null;
//   // let remoteData: any = null;
//   let remoteHash: string | null = null;
//   // let pendingPatch: any = null;

//   function init(base: string, patch: jsonpatch.Operation[]) {
//     remoteHash = base;

//     const doc = {};
//     jsonpatch.applyPatch(doc, patch);
//     jsonpatch.observe(doc, patch => applyOutgoing(patch));
//     data = reactive(doc);

//     // remoteData = jsonpatch.deepClone(doc);
//   }

//   function applyIncoming(base: string, patch: jsonpatch.Operation[] | undefined) {
//     remoteHash = base;

//     if (patch) {
//       jsonpatch.applyPatch(data, patch);
//       // jsonpatch.applyPatch(remoteData, patch);
//       // } else {
//       //   jsonpatch.applyPatch(remoteData, pendingPatch);
//       //   pendingPatch = null;
//     }
//   }

//   function applyOutgoing(patch: jsonpatch.Operation[]) {
//     // if (pendingPatch) location.reload();
//     // pendingPatch = patch;

//     ws.send(JSON.stringify({
//       base: remoteHash,
//       patch,
//     }));
//   }

//   return new Promise(resolve => {
//     ws.addEventListener('message', e => {
//       const { base, patch } = JSON.parse(e.data);
//       if (data === null) {
//         init(base, patch);
//         resolve(data);
//       } else {
//         applyIncoming(base, patch);
//       }
//     });

//     ws.addEventListener('close', () => {
//       location.reload();
//     });
//   });
// }

export function initData(remote: string) {
  const context: Context = shallowReactive({
    data: null,
  });

  connect(model, remote).then(data => {
    data.state = reactive(data.state);
    context.data = data;
  });

  return context;
}
