import * as $ from 'jquery';

import {getCurrentDoubanBookId} from './util/url';
import {getBookTitle} from './util/douban';
import {injectDoubanGroupSearch} from './util/inject';

main();

function main() {
    const doubanId = getCurrentDoubanBookId();
    if (!doubanId) {
        return;
    }

    const title = getBookTitle();
    console.log(title);

    injectDoubanGroupSearch(title);
}
