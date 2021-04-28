import React, { Component } from "react";
import { Link } from "react-router-dom"
import NavigationHeader from './NavigationHeader'

class Navigation extends Component {
    componentDidMount() {
        simpleCount()
        var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
        simplyCountdown('.simply-countdown-one', {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate()
        });
    }
    render() {
        return (
            <div id="page">
                <NavigationHeader />
                <header id="fh5co-header" className="fh5co-cover">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center">
                                    <div className="display-t">
                                        <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                            <h1>{this.props.title}</h1>
                                            <h2>{this.props.cote}</h2>
                                            <div className="simply-countdown simply-countdown-one"></div>
                                            <p><a className="btn btn-display"><Link to='/login'>Save your memories</Link></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div >
        );
    }
}

export default Navigation;




const simpleCount = () => {
    (function (exports) {


        var // functions
            extend,
            createElements,
            createCountdownElt,
            simplyCountdown;


        extend = function (out) {
            var i,
                obj,
                key;
            out = out || {};

            for (i = 1; i < arguments.length; i += 1) {
                obj = arguments[i];

                if (obj) {
                    for (key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            if (typeof obj[key] === 'object') {
                                extend(out[key], obj[key]);
                            } else {
                                out[key] = obj[key];
                            }
                        }
                    }
                }
            }

            return out;
        };

        createCountdownElt = function (countdown, parameters, typeClass) {
            var innerSectionTag,
                sectionTag,
                amountTag,
                wordTag;

            sectionTag = document.createElement('div');
            amountTag = document.createElement('span');
            wordTag = document.createElement('span');
            innerSectionTag = document.createElement('div');

            innerSectionTag.appendChild(amountTag);
            innerSectionTag.appendChild(wordTag);
            sectionTag.appendChild(innerSectionTag);

            sectionTag.classList.add(parameters.sectionClass);
            sectionTag.classList.add(typeClass);
            amountTag.classList.add(parameters.amountClass);
            wordTag.classList.add(parameters.wordClass);

            countdown.appendChild(sectionTag);

            return {
                full: sectionTag,
                amount: amountTag,
                word: wordTag
            };
        };


        createElements = function (parameters, countdown) {
            var spanTag;

            if (!parameters.inline) {
                return {
                    days: createCountdownElt(countdown, parameters, 'simply-days-section'),
                    hours: createCountdownElt(countdown, parameters, 'simply-hours-section'),
                    minutes: createCountdownElt(countdown, parameters, 'simply-minutes-section'),
                    seconds: createCountdownElt(countdown, parameters, 'simply-seconds-section')
                };
            }

            spanTag = document.createElement('span');
            spanTag.classList.add(parameters.inlineClass);
            return spanTag;
        };

        simplyCountdown = function (elt, args) {
            var parameters = extend({
                year: 2015,
                month: 6,
                day: 28,
                hours: 0,
                minutes: 0,
                seconds: 0,
                words: {
                    days: 'day',
                    hours: 'hour',
                    minutes: 'minute',
                    seconds: 'second',
                    pluralLetter: 's'
                },
                plural: true,
                inline: false,
                enableUtc: true,
                onEnd: function () {
                    return;
                },
                refresh: 1000,
                inlineClass: 'simply-countdown-inline',
                sectionClass: 'simply-section',
                amountClass: 'simply-amount',
                wordClass: 'simply-word',
                zeroPad: false
            }, args),
                interval,
                targetDate,
                targetTmpDate,
                now,
                nowUtc,
                secondsLeft,
                days,
                hours,
                minutes,
                seconds,
                cd = document.querySelectorAll(elt);

            targetTmpDate = new Date(
                parameters.year,
                parameters.month - 1,
                parameters.day,
                parameters.hours,
                parameters.minutes,
                parameters.seconds
            );

            if (parameters.enableUtc) {
                targetDate = new Date(
                    targetTmpDate.getUTCFullYear(),
                    targetTmpDate.getUTCMonth(),
                    targetTmpDate.getUTCDate(),
                    targetTmpDate.getUTCHours(),
                    targetTmpDate.getUTCMinutes(),
                    targetTmpDate.getUTCSeconds()
                );
            } else {
                targetDate = targetTmpDate;
            }

            Array.prototype.forEach.call(cd, function (countdown) {
                var fullCountDown = createElements(parameters, countdown),
                    refresh;

                refresh = function () {
                    var dayWord,
                        hourWord,
                        minuteWord,
                        secondWord;

                    now = new Date();
                    if (parameters.enableUtc) {
                        nowUtc = new Date(now.getFullYear(), now.getMonth(), now.getDate(),
                            now.getHours(), now.getMinutes(), now.getSeconds());
                        secondsLeft = (targetDate - nowUtc.getTime()) / 1000;

                    } else {
                        secondsLeft = (targetDate - now.getTime()) / 1000;
                    }

                    if (secondsLeft > 0) {
                        days = parseInt(secondsLeft / 86400, 10);
                        secondsLeft = secondsLeft % 86400;

                        hours = parseInt(secondsLeft / 3600, 10);
                        secondsLeft = secondsLeft % 3600;

                        minutes = parseInt(secondsLeft / 60, 10);
                        seconds = parseInt(secondsLeft % 60, 10);
                    } else {
                        days = 0;
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                        window.clearInterval(interval);
                        parameters.onEnd();
                    }

                    if (parameters.plural) {
                        dayWord = days > 1
                            ? parameters.words.days + parameters.words.pluralLetter
                            : parameters.words.days;

                        hourWord = hours > 1
                            ? parameters.words.hours + parameters.words.pluralLetter
                            : parameters.words.hours;

                        minuteWord = minutes > 1
                            ? parameters.words.minutes + parameters.words.pluralLetter
                            : parameters.words.minutes;

                        secondWord = seconds > 1
                            ? parameters.words.seconds + parameters.words.pluralLetter
                            : parameters.words.seconds;

                    } else {
                        dayWord = parameters.words.days;
                        hourWord = parameters.words.hours;
                        minuteWord = parameters.words.minutes;
                        secondWord = parameters.words.seconds;
                    }

                    if (parameters.inline) {
                        countdown.innerHTML =
                            days + ' ' + dayWord + ', ' +
                            hours + ' ' + hourWord + ', ' +
                            minutes + ' ' + minuteWord + ', ' +
                            seconds + ' ' + secondWord + '.';

                    } else {
                        fullCountDown.days.amount.textContent = (parameters.zeroPad && days.toString().length < 2 ? '0' : '') + days;
                        fullCountDown.days.word.textContent = dayWord;

                        fullCountDown.hours.amount.textContent = (parameters.zeroPad && hours.toString().length < 2 ? '0' : '') + hours;
                        fullCountDown.hours.word.textContent = hourWord;

                        fullCountDown.minutes.amount.textContent = (parameters.zeroPad && minutes.toString().length < 2 ? '0' : '') + minutes;
                        fullCountDown.minutes.word.textContent = minuteWord;

                        fullCountDown.seconds.amount.textContent = (parameters.zeroPad && seconds.toString().length < 2 ? '0' : '') + seconds;
                        fullCountDown.seconds.word.textContent = secondWord;
                    }
                };

                refresh();
                interval = window.setInterval(refresh, parameters.refresh);
            });
        };

        exports.simplyCountdown = simplyCountdown;
    }(window));

    /*global jQuery, simplyCountdown*/
    if (window.jQuery) {
        (function (simplyCountdown) {
            simplyCountdown();
        }(jQuery, simplyCountdown));
    }

}