"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const MeterEventSession_js_1 = require("./Billing/MeterEventSession.js");
const MeterEventAdjustments_js_1 = require("./Billing/MeterEventAdjustments.js");
const MeterEventStream_js_1 = require("./Billing/MeterEventStream.js");
const MeterEvents_js_1 = require("./Billing/MeterEvents.js");
exports.Billing = StripeResource_js_1.StripeResource.extend({
    constructor: function (...args) {
        StripeResource_js_1.StripeResource.apply(this, args);
        this.meterEventSession = new MeterEventSession_js_1.MeterEventSession(...args);
        this.meterEventAdjustments = new MeterEventAdjustments_js_1.MeterEventAdjustments(...args);
        this.meterEventStream = new MeterEventStream_js_1.MeterEventStream(...args);
        this.meterEvents = new MeterEvents_js_1.MeterEvents(...args);
    },
});
