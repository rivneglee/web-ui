var EasyAssess = require('../../easyassess.application');

EasyAssess.directives["esFormResult"]
    = EasyAssess.app.directive("esFormResult", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        template: '<div>'
                    + '<div class="es-form-header"><span class="es-form-header-text">{{esForm.formName}} ({{esForm.ownerName}})</span></div>'
                        + '<div style="padding: 10px 0px 10px 0px;">'
                        +    '<span class="es-form-group-title">' + EasyAssess.lang.forms.group.statementText + ':</span>'
                        +    '<es-form-footer es-editable="false" es-footer="esTemplate.footer"></es-form-footer>'
                        + '</div>'
                        + '<div style="overflow-x:auto;">'
                            + '<div class="es-page-section" ng-repeat="group in esTemplate.groups">'
                            + '<div class="es-form-group">'
                            +	 '<table class="table table-striped">'
                            + 	'<thead><tr><th style="width:15%;">' + EasyAssess.lang.forms.group.categoryText+ '</th><th style="width:45%;">' + EasyAssess.lang.forms.group.specimenText + '</th><!--th style="width:40%;">' + EasyAssess.lang.forms.group.codeGroupText + '</th>--></tr></thead>'
                            +     '<tbody>'
                            +			'<tr>'
                            +				'<td>'
                            +					'<table>'
                            +						'<tr>'
                            +							'<td class="es-form-group-cell" valign="middle"><div  class="es-form-group-text">{{group.name}}</div></td>'
                            +						'</tr>'
                            +						'<tr ng-repeat="row in group.rows">'
                            +							'<td class="es-form-group-cell" valign="middle"><div>{{row.item.subject}} - {{row.item.unit}} </div></td>'
                            +						'</tr>'
                            +					'</table>'
                            +				'</td>'
                            +				'<td>'
                            +					'<table>'
                            +						'<tr>'
                            +							'<td class="es-form-group-cell" ng-repeat="specimen in group.specimens"><span class="es-form-group-title" ng-if="esForm.status==\'F\'">{{specimen.number}} </span><span class="es-form-group-title">{{getSpecimenCode(specimen.guid)}}</span></td>'
                            +             '<td align="right" class="es-form-group-cell" ng-if="esForm.status==\'F\'"><span class="es-form-group-title">' + EasyAssess.lang.forms.group.scoreText + '</span></td>'
                            +						'</tr>'
                            +						'<tr ng-repeat="row in group.rows">'
                            +							'<td class="es-form-group-cell" ng-repeat="specimen in group.specimens"><span ng-bind="getValue(row, specimen)"></span></td>'
                            +             '<td align="right" class="es-form-group-cell" ng-if="esForm.status==\'F\'"><a title="{{scoreMap[row.guid].details}}" href="javascript:void(0);" >{{scoreMap[row.guid].total}}</a></td>'
                            +						'</tr>'
                            +					'</table>'
                            +				'</td>'
                            +				'<td ng-if="group.rows.length > 0">'
                            +					'<table>'
                            +						'<tr>'
                            +							'<td class="es-form-group-cell" ng-repeat="codeGroup in group.codeGroups"><span class="es-form-group-title">{{codeGroup.name}}</span></td>'
                            +						'</tr>'
                            +						'<tr ng-repeat="row in group.rows">'
                            +							'<td class="es-form-group-cell" ng-repeat="codeGroup in group.codeGroups"><span>{{getCode(row, codeGroup)}}</span></td>'
                            +						'</tr>'
                            +					'</table>'
                            +				'</td>'
                            +       '<td>'
                            +          '<table cellpadding="10" cellspacing="10" style="width: 100%;">'
                            +						'<tr>'
                            +							'<td class="es-form-group-cell"><span class="es-form-group-title">' + EasyAssess.lang.forms.group.batchCodeText + '</span></td>'
                            +							'<td class="es-form-group-cell"><span class="es-form-group-title">' + EasyAssess.lang.forms.group.expireDateText + '</span></td>'
                            +						'</tr>'
                            +            '<tr ng-repeat="row in group.rows">'
                            +               '<td class="es-form-group-cell"><span class="es-form-signature-line">{{detailsMap[row.guid].batchNumber}}</span></td>'
                            +               '<td class="es-form-group-cell"><span class="es-form-signature-line">{{detailsMap[row.guid].expire}}</span></td>'
                            +            '</tr>'
                            +           '</table>'
                            +       '</td>'
                            +			'</tr>'
                            +	 	'</tbody></table>'
                            +   '<table style="width: 100%;">'
                            +       '<tr>'
                            +           '<td style="width: 60%;"></td>'
                            +           '<td align="right" class="es-form-group-cell"><span>' + EasyAssess.lang.forms.group.testerText + ': {{signatures[group.guid]["tester"]}}</span></td>'
                            +           '<td align="center" class="es-form-group-cell"><span>' + EasyAssess.lang.forms.group.testDateText + ': {{signatures[group.guid]["testDate"]}}</span></td>'
                            +       '</tr>'
                            +       '<tr>'
                            +           '<td style="width: 60%;"></td>'
                            +           '<td align="right" class="es-form-group-cell"><span>' + EasyAssess.lang.forms.group.reviewerText + ': {{signatures[group.guid]["reviewer"]}}</span></td>'
                            +           '<td align="center" class="es-form-group-cell"><span>' + EasyAssess.lang.forms.group.reviewDateText + ': {{signatures[group.guid]["reviewDate"]}}</span></td>'
                            +       '</tr>'
                            +       '<tr>'
                            +           '<td style="width: 60%;"></td>'
                            +           '<td colspan="2">'
                            +               '<span align="left" class="es-form-group-title">' + EasyAssess.lang.forms.group.commentText + ':</span>'
                            +               '<span style="word-wrap:break-word;word-break:break-all;">{{signatures[group.guid]["comments"]}}</span>'
                            +           '</td>'
                            +       '</tr>'
                            +   '</table>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                    +   '<div style="padding: 10px 0px 10px 0px;">'
                    +      '<div class="es-form-group-title">' + EasyAssess.lang.pages.assessment.additionalScoreText + ': {{esForm.additionalScore}}</div>'
                    +      '<div class="es-form-group-title">' + EasyAssess.lang.pages.assessment.additionScoreStatementText + ': {{esForm.additationScoreDesc}}</div>'
                    +   '</div>'
                + '</div>',
        scope: {
            esForm: "=",
            esTemplate: "="
        },

        controller: ["$scope", function($scope, $element, $attrs){
            $scope.valuesMap = {};
            $scope.codesMap = {};
            $scope.detailsMap = {};
            $scope.signatures = {};
            $scope.scoreMap = {};
            if ($scope.esForm.status != "F") {
                $scope.esTemplate.groups.forEach(function(group) {
                    group.specimens = shuffle(group.specimens);
                });
            }
            console.log($scope.esForm);
            function shuffle(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }

            if ($scope.esForm.signatures) {
                $scope.esTemplate.groups.forEach(function(group){
                    if ($scope.esForm.signatures[group.guid]) {
                        $scope.signatures[group.guid] = $scope.esForm.signatures[group.guid];
                    } else {
                        $scope.signatures[group.guid] = {};
                    }
                });
            }

            if ($scope.esForm.values) {
                $scope.esForm.values.forEach(function(value) {
                    $scope.valuesMap[value.subjectGuid + "+" + value.specimenGuid] = value.value;
                    if ($scope.esForm.status == 'F') {
                        if (!$scope.scoreMap[value.subjectGuid]) {
                            $scope.scoreMap[value.subjectGuid] = {
                                total:0,
                                details:''
                            };
                        }
                        $scope.scoreMap[value.subjectGuid][value.specimenGuid] = value.score;
                        $scope.scoreMap[value.subjectGuid].total += Number(value.score);
                        $scope.scoreMap[value.subjectGuid].details += EasyAssess.lang.forms.group.specimenText + ':' + value.specimenNumber + '(' + value.specimenCode + ')'  + EasyAssess.lang.forms.group.getText + value.score + EasyAssess.lang.forms.group.scoreText + '\n';
                    }
                });
            }

            if ($scope.esForm.details) {
                $scope.esForm.details.forEach(function(detail) {
                    $scope.detailsMap[detail.subjectGuid] = detail;
                });
            }
            if ($scope.esForm.codes) {
                $scope.esForm.codes.forEach(function(code) {
                    if (!$scope.codesMap[code.subjectGuid]) {
                        $scope.codesMap[code.subjectGuid] = [];
                    }
                    $scope.codesMap[code.subjectGuid].push(code);
                });
            }

            $scope.getValue = function(row, specimen) {
                return $scope.valuesMap[row.guid + "+" + specimen.guid];
            };

            $scope.getCode = function(row, group) {
                var codes = $scope.codesMap[row.guid];
                if (codes && codes.length) {
                    for (var i=0;i<codes.length;i++) {
                        if (codes[i].codeGroup.guid == group.guid) {
                            return codes[i].codeName;
                        }
                    }
                }
                return "";
            };

            $scope.getSpecimenCode = function(specimenGuid) {
                var value = $scope.esForm.values.find(function(value) {
                    return value.specimenGuid == specimenGuid;
                });
                if (value) {
                    return "(" + value.specimenCode + ")";
                }
                return "";
            };
        }]
    }


});
