export default ($injector) => {

    const moment = $injector.get('moment');
    const _ = $injector.get('lodash');

    return {
        init(ctx, resolve, reject) {
            let items = [];

            items.forEach(item => {
                if (isLeaf(item)) {
                    ctx.create(item);
                } else {
                    ctx.createContainer(item);
                }
            });

            resolve();

            function isLeaf(item) {
                return item.value;
            }
        },
        history(ctx, resolve, reject, options) {
            const result = [];

            if (options) {
                if (options.start && options.end) {
                }

                if (options.since) {
                }
            }

            resolve(result);
        },
        update(ctx, resolve, reject, payload) {
            reject('Not supported.');
        },
    };
}
