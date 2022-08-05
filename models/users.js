'use strict';

const blankStruct = {
    success: null,
    message: "",
    data: null
};

const usersList =
{
    "1": {
        id: 1,
        name: 'Cristiano Ronaldo',
        wallet_address: 'abc'
    },
    "2": {
        id: 2,
        name: 'Lionel Messi',
        wallet_address: 'xyz'
    }

}

exports.getUsers = async (userId) => {
    return usersList[userId];
}