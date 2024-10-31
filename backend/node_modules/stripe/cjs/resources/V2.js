"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2 = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const Billing_js_1 = require("./V2/Billing.js");
const Core_js_1 = require("./V2/Core.js");
exports.V2 = StripeResource_js_1.StripeResource.extend({
    constructor: function (...args) {
        StripeResource_js_1.StripeResource.apply(this, args);
        this.billing = new Billing_js_1.Billing(...args);
        this.core = new Core_js_1.Core(...args);
    },
});
