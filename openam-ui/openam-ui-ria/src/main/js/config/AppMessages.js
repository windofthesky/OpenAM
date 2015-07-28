/**
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2015 ForgeRock AS.
 */

/*global define*/

define("config/AppMessages", [
], function () {
    return {
        /**
         * Common Messages.
         */
        "invalidRealm": {
            msg: "config.messages.AppMessages.invalidRealm",
            type: "error"
        },
        "duplicateRealm": {
            msg: "config.messages.AppMessages.duplicateRealm",
            type: "error"
        },
        "deleteFail": {
            msg: "config.messages.AppMessages.deleteFail",
            type: "error"
        },
        "changesSaved": {
            msg: "config.messages.AppMessages.changesSaved",
            type: "info"
        },
        "invalidItem": {
            msg: "config.messages.AppMessages.invalidItem",
            type: "error"
        },
        "duplicateItem": {
            msg: "config.messages.AppMessages.duplicateItem",
            type: "error"
        },
        "errorNoName": {
            msg: "config.messages.AdminMessages.policies.error.noName",
            type: "error"
        },
        "errorCantStartWithHash": {
            msg: "config.messages.AdminMessages.policies.error.cantStartWithHash",
            type: "error"
        },

        /**
         * UMA Messages.
         */
        "policyCreatedSuccess": {
            msg: "uma.share.messages.success",
            type: "info"
        },
        "policyCreatedFail": {
            msg: "uma.share.messages.fail",
            type: "error"
        },
        "revokeAllResourcesSuccess": {
            msg: "uma.resources.list.revokeAllResourcesSuccess",
            type: "info"
        },
        "revokeAllResourcesFail": {
            msg: "uma.resources.list.revokeAllResourcesFail",
            type: "error"
        },
        "revokeAllPoliciesSuccess": {
            msg: "uma.resources.show.revokeAllPoliciesSuccess",
            type: "info"
        },
        "revokeAllPoliciesFail": {
            msg: "uma.resources.show.revokeAllPoliciesFail",
            type: "error"
        },
        "revokePolicySuccess": {
            msg: "uma.resources.show.revokePolicySuccess",
            type: "info"
        },
        "revokePolicyFail": {
            msg: "uma.resources.show.revokePolicyFail",
            type: "error"
        },

        /**
         * Scripts messages.
         */
        "scriptErrorNoName": {
            msg: "config.messages.AdminMessages.scripts.error.noName",
            type: "error"
        },
        "scriptErrorNoLanguage": {
            msg: "config.messages.AdminMessages.scripts.error.noLanguage",
            type: "error"
        },

        /**
         * Policies messages.
         */
        "applicationErrorNoResourceTypes": {
            msg: "config.messages.AdminMessages.policies.error.noResourceTypes",
            type: "error"
        },
        "policyErrorNoResources": {
            msg: "config.messages.AdminMessages.policies.error.noResources",
            type: "error"
        },
        "resTypeErrorNoPatterns": {
            msg: "config.messages.AdminMessages.policies.error.noPatterns",
            type: "error"
        },
        "resTypeErrorNoActions": {
            msg: "config.messages.AdminMessages.policies.error.noActions",
            type: "error"
        },
        "ruleErrorFullLogical": {
            msg: "config.messages.AdminMessages.policies.ruleErrorFullLogical",
            type: "error"
        },
        "ruleHelperTryAndOr": {
            msg: "config.messages.AdminMessages.policies.ruleHelperTryAndOr",
            type: "info"
        }
    };
});