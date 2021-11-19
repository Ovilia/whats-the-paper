import * as $ from 'jquery';

export function getBookTitle() {
    return $('h1 span').text();
}
