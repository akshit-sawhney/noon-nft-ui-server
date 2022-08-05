'use strict';

const blankStruct = {
    success: null,
    message: "",
    data: null
};

exports.getUserDetails = async (req, res) => {
    const userId = Number(req.params.userId)
    const responseStruct = Object.assign({}, blankStruct);
    responseStruct.data = userId;
    return res.status(200).send(responseStruct);
}