import _ from 'lodash';

const sortAscending = (data, sortBy) => {
    return _.orderBy(data, [sortBy], ['asc']);
}

const sortDescending = (data, sortBy) => {
    return _.orderBy(data, [sortBy], ['desc']);
}
export { sortAscending, sortDescending }