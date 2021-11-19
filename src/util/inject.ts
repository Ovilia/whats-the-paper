import * as $ from 'jquery';

export function injectDoubanGroupSearch(keyword: string) {
    const link = keyword
        ? `在“是轻型纸哦”小组<a target="_blank" href="https://www.douban.com/group/search?group=731560&cat=1013&q=${keyword}">搜索关键词“${keyword}”</a>`
        : `<a target="_blank" href="https://www.douban.com/group/731560/">前往“是轻型纸哦”小组</a>`;

    $(`
        <div class="gray_ad">
            <h2>是轻型纸吗？</h2>
            <ul class="bs">
                <li>${link}</li>
                <li>
                    <a target="_blank" href="https://www.douban.com/group/731560/">向友邻提供轻型纸信息</a>
                    <div>
                        <span style="color: rgba(0,0,0,0.5); font-size: 0.8em">
                            （发帖前必看<a target="_blank" href="https://www.douban.com/group/topic/252668375">小组规则</a>！）
                        </span>
                    </div>
                </li>
            <ul>
            <div class="market-banner" style="margin-top: 10px">
                <span class="promotion-info" style="line-height: 18px; font-size: 0.8em">
                    小组讨论内容仅代表友邻个人意见，并且不同出版社、版本、不同印次可能采用不同纸张，注意查看讨论的具体信息，不确定的可以问楼主。小组讨论信息仅供参考！
                </span>
            </div>
        </div>
    `)
        .insertBefore($('.aside .gray_ad').first());
}
