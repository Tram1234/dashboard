/**
 * Created by vlad on 03/12/2016.
 */
const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;





const TypesSchema = new mongoose.Schema({

    AttackIndication: Number,
    DataLeakage: Number,
    Phishing: Number,
    BrandSecurity: Number,
    ExploiteableData: Number,
    vip: Number

},{ _id: false });

const SeveritiesSchema = new mongoose.Schema({
    High: Number,
    Medium: Number,
    Low: Number
},{ _id: false });

const ClearSourcesSchema = new mongoose.Schema({
    AplicationStore:Number,
    SocialMedia:Number,
    PasteSites:Number,
    Others:Number

},{ _id: false });

const DarkSourcesSchema = new mongoose.Schema({

    BlackMarkets:Number,
    HackingForums:Number,
    PasteSites:Number,
    Others:Number

},{ _id: false });

const ClearWebSchema = new mongoose.Schema({
    Types:[TypesSchema],
    Severities:[SeveritiesSchema],
    Sources:[ClearSourcesSchema]
},{ _id: false });

const DarkWebSchema = new mongoose.Schema({
    Types:[TypesSchema],
    Severities:[SeveritiesSchema],
    Sources:[DarkSourcesSchema]

},{ _id: false });

const dataSchema = new mongoose.Schema({
    ClearWeb:[ClearWebSchema],
    DarkWeb:[DarkWebSchema]
});


module.exports = mongoose.model('Data', dataSchema);
