!(function (a) {
	typeof module === 'object' && module.exports
		? (module.exports = a())
		: (window.intlTelInput = a());
})(function (a) {
	'use strict';
	return (function () {
		function b(a, b) {
			if (!(a instanceof b))
				throw new TypeError('Cannot call a class as a function');
		}
		function c(a, b) {
			for (let c = 0; c < b.length; c++) {
				const d = b[c];
				(d.enumerable = d.enumerable || !1),
					(d.configurable = !0),
					'value' in d && (d.writable = !0),
					Object.defineProperty(a, d.key, d);
			}
		}
		function d(a, b, d) {
			return b && c(a.prototype, b), d && c(a, d), a;
		}
		for (
			var e = [
					['Afghanistan (‫افغانستان‬‎)', 'af', '93'],
					['Albania (Shqipëri)', 'al', '355'],
					['Algeria (‫الجزائر‬‎)', 'dz', '213'],
					['American Samoa', 'as', '1', 5, ['684']],
					['Andorra', 'ad', '376'],
					['Angola', 'ao', '244'],
					['Anguilla', 'ai', '1', 6, ['264']],
					['Antigua and Barbuda', 'ag', '1', 7, ['268']],
					['Argentina', 'ar', '54'],
					['Armenia (Հայաստան)', 'am', '374'],
					['Aruba', 'aw', '297'],
					['Ascension Island', 'ac', '247'],
					['Australia', 'au', '61', 0],
					['Austria (Österreich)', 'at', '43'],
					['Azerbaijan (Azərbaycan)', 'az', '994'],
					['Bahamas', 'bs', '1', 8, ['242']],
					['Bahrain (‫البحرين‬‎)', 'bh', '973'],
					['Bangladesh (বাংলাদেশ)', 'bd', '880'],
					['Barbados', 'bb', '1', 9, ['246']],
					['Belarus (Беларусь)', 'by', '375'],
					['Belgium (België)', 'be', '32'],
					['Belize', 'bz', '501'],
					['Benin (Bénin)', 'bj', '229'],
					['Bermuda', 'bm', '1', 10, ['441']],
					['Bhutan (འབྲུག)', 'bt', '975'],
					['Bolivia', 'bo', '591'],
					['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'],
					['Botswana', 'bw', '267'],
					['Brazil (Brasil)', 'br', '55'],
					['British Indian Ocean Territory', 'io', '246'],
					['British Virgin Islands', 'vg', '1', 11, ['284']],
					['Brunei', 'bn', '673'],
					['Bulgaria (България)', 'bg', '359'],
					['Burkina Faso', 'bf', '226'],
					['Burundi (Uburundi)', 'bi', '257'],
					['Cambodia (កម្ពុជា)', 'kh', '855'],
					['Cameroon (Cameroun)', 'cm', '237'],
					[
						'Canada',
						'ca',
						'1',
						1,
						[
							'204',
							'226',
							'236',
							'249',
							'250',
							'289',
							'306',
							'343',
							'365',
							'387',
							'403',
							'416',
							'418',
							'431',
							'437',
							'438',
							'450',
							'506',
							'514',
							'519',
							'548',
							'579',
							'581',
							'587',
							'604',
							'613',
							'639',
							'647',
							'672',
							'705',
							'709',
							'742',
							'778',
							'780',
							'782',
							'807',
							'819',
							'825',
							'867',
							'873',
							'902',
							'905',
						],
					],
					['Cape Verde (Kabu Verdi)', 'cv', '238'],
					['Caribbean Netherlands', 'bq', '599', 1, ['3', '4', '7']],
					['Cayman Islands', 'ky', '1', 12, ['345']],
					['Central African Republic (République centrafricaine)', 'cf', '236'],
					['Chad (Tchad)', 'td', '235'],
					['Chile', 'cl', '56'],
					['China (中国)', 'cn', '86'],
					['Christmas Island', 'cx', '61', 2, ['89164']],
					['Cocos (Keeling) Islands', 'cc', '61', 1, ['89162']],
					['Colombia', 'co', '57'],
					['Comoros (‫جزر القمر‬‎)', 'km', '269'],
					['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'],
					['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'],
					['Cook Islands', 'ck', '682'],
					['Costa Rica', 'cr', '506'],
					['Côte d’Ivoire', 'ci', '225'],
					['Croatia (Hrvatska)', 'hr', '385'],
					['Cuba', 'cu', '53'],
					['Curaçao', 'cw', '599', 0],
					['Cyprus (Κύπρος)', 'cy', '357'],
					['Czech Republic (Česká republika)', 'cz', '420'],
					['Denmark (Danmark)', 'dk', '45'],
					['Djibouti', 'dj', '253'],
					['Dominica', 'dm', '1', 13, ['767']],
					[
						'Dominican Republic (República Dominicana)',
						'do',
						'1',
						2,
						['809', '829', '849'],
					],
					['Ecuador', 'ec', '593'],
					['Egypt (‫مصر‬‎)', 'eg', '20'],
					['El Salvador', 'sv', '503'],
					['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'],
					['Eritrea', 'er', '291'],
					['Estonia (Eesti)', 'ee', '372'],
					['Eswatini', 'sz', '268'],
					['Ethiopia', 'et', '251'],
					['Falkland Islands (Islas Malvinas)', 'fk', '500'],
					['Faroe Islands (Føroyar)', 'fo', '298'],
					['Fiji', 'fj', '679'],
					['Finland (Suomi)', 'fi', '358', 0],
					['France', 'fr', '33'],
					['French Guiana (Guyane française)', 'gf', '594'],
					['French Polynesia (Polynésie française)', 'pf', '689'],
					['Gabon', 'ga', '241'],
					['Gambia', 'gm', '220'],
					['Georgia (საქართველო)', 'ge', '995'],
					['Germany (Deutschland)', 'de', '49'],
					['Ghana (Gaana)', 'gh', '233'],
					['Gibraltar', 'gi', '350'],
					['Greece (Ελλάδα)', 'gr', '30'],
					['Greenland (Kalaallit Nunaat)', 'gl', '299'],
					['Grenada', 'gd', '1', 14, ['473']],
					['Guadeloupe', 'gp', '590', 0],
					['Guam', 'gu', '1', 15, ['671']],
					['Guatemala', 'gt', '502'],
					['Guernsey', 'gg', '44', 1, ['1481', '7781', '7839', '7911']],
					['Guinea (Guinée)', 'gn', '224'],
					['Guinea-Bissau (Guiné Bissau)', 'gw', '245'],
					['Guyana', 'gy', '592'],
					['Haiti', 'ht', '509'],
					['Honduras', 'hn', '504'],
					['Hong Kong (香港)', 'hk', '852'],
					['Hungary (Magyarország)', 'hu', '36'],
					['Iceland (Ísland)', 'is', '354'],
					['India (भारत)', 'in', '91'],
					['Indonesia', 'id', '62'],
					['Iran (‫ایران‬‎)', 'ir', '98'],
					['Iraq (‫العراق‬‎)', 'iq', '964'],
					['Ireland', 'ie', '353'],
					[
						'Isle of Man',
						'im',
						'44',
						2,
						['1624', '74576', '7524', '7924', '7624'],
					],
					['Israel (‫ישראל‬‎)', 'il', '972'],
					['Italy (Italia)', 'it', '39', 0],
					['Jamaica', 'jm', '1', 4, ['876', '658']],
					['Japan (日本)', 'jp', '81'],
					[
						'Jersey',
						'je',
						'44',
						3,
						['1534', '7509', '7700', '7797', '7829', '7937'],
					],
					['Jordan (‫الأردن‬‎)', 'jo', '962'],
					['Kazakhstan (Казахстан)', 'kz', '7', 1, ['33', '7']],
					['Kenya', 'ke', '254'],
					['Kiribati', 'ki', '686'],
					['Kosovo', 'xk', '383'],
					['Kuwait (‫الكويت‬‎)', 'kw', '965'],
					['Kyrgyzstan (Кыргызстан)', 'kg', '996'],
					['Laos (ລາວ)', 'la', '856'],
					['Latvia (Latvija)', 'lv', '371'],
					['Lebanon (‫لبنان‬‎)', 'lb', '961'],
					['Lesotho', 'ls', '266'],
					['Liberia', 'lr', '231'],
					['Libya (‫ليبيا‬‎)', 'ly', '218'],
					['Liechtenstein', 'li', '423'],
					['Lithuania (Lietuva)', 'lt', '370'],
					['Luxembourg', 'lu', '352'],
					['Macau (澳門)', 'mo', '853'],
					['North Macedonia (Македонија)', 'mk', '389'],
					['Madagascar (Madagasikara)', 'mg', '261'],
					['Malawi', 'mw', '265'],
					['Malaysia', 'my', '60'],
					['Maldives', 'mv', '960'],
					['Mali', 'ml', '223'],
					['Malta', 'mt', '356'],
					['Marshall Islands', 'mh', '692'],
					['Martinique', 'mq', '596'],
					['Mauritania (‫موريتانيا‬‎)', 'mr', '222'],
					['Mauritius (Moris)', 'mu', '230'],
					['Mayotte', 'yt', '262', 1, ['269', '639']],
					['Mexico (México)', 'mx', '52'],
					['Micronesia', 'fm', '691'],
					['Moldova (Republica Moldova)', 'md', '373'],
					['Monaco', 'mc', '377'],
					['Mongolia (Монгол)', 'mn', '976'],
					['Montenegro (Crna Gora)', 'me', '382'],
					['Montserrat', 'ms', '1', 16, ['664']],
					['Morocco (‫المغرب‬‎)', 'ma', '212', 0],
					['Mozambique (Moçambique)', 'mz', '258'],
					['Myanmar (Burma) (မြန်မာ)', 'mm', '95'],
					['Namibia (Namibië)', 'na', '264'],
					['Nauru', 'nr', '674'],
					['Nepal (नेपाल)', 'np', '977'],
					['Netherlands (Nederland)', 'nl', '31'],
					['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'],
					['New Zealand', 'nz', '64'],
					['Nicaragua', 'ni', '505'],
					['Niger (Nijar)', 'ne', '227'],
					['Nigeria', 'ng', '234'],
					['Niue', 'nu', '683'],
					['Norfolk Island', 'nf', '672'],
					['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'],
					['Northern Mariana Islands', 'mp', '1', 17, ['670']],
					['Norway (Norge)', 'no', '47', 0],
					['Oman (‫عُمان‬‎)', 'om', '968'],
					['Pakistan (‫پاکستان‬‎)', 'pk', '92'],
					['Palau', 'pw', '680'],
					['Palestine (‫فلسطين‬‎)', 'ps', '970'],
					['Panama (Panamá)', 'pa', '507'],
					['Papua New Guinea', 'pg', '675'],
					['Paraguay', 'py', '595'],
					['Peru (Perú)', 'pe', '51'],
					['Philippines', 'ph', '63'],
					['Poland (Polska)', 'pl', '48'],
					['Portugal', 'pt', '351'],
					['Puerto Rico', 'pr', '1', 3, ['787', '939']],
					['Qatar (‫قطر‬‎)', 'qa', '974'],
					['Réunion (La Réunion)', 're', '262', 0],
					['Romania (România)', 'ro', '40'],
					['Russia (Россия)', 'ru', '7', 0],
					['Rwanda', 'rw', '250'],
					['Saint Barthélemy', 'bl', '590', 1],
					['Saint Helena', 'sh', '290'],
					['Saint Kitts and Nevis', 'kn', '1', 18, ['869']],
					['Saint Lucia', 'lc', '1', 19, ['758']],
					['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2],
					['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'],
					['Saint Vincent and the Grenadines', 'vc', '1', 20, ['784']],
					['Samoa', 'ws', '685'],
					['San Marino', 'sm', '378'],
					['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'],
					['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'],
					['Senegal (Sénégal)', 'sn', '221'],
					['Serbia (Србија)', 'rs', '381'],
					['Seychelles', 'sc', '248'],
					['Sierra Leone', 'sl', '232'],
					['Singapore', 'sg', '65'],
					['Sint Maarten', 'sx', '1', 21, ['721']],
					['Slovakia (Slovensko)', 'sk', '421'],
					['Slovenia (Slovenija)', 'si', '386'],
					['Solomon Islands', 'sb', '677'],
					['Somalia (Soomaaliya)', 'so', '252'],
					['South Africa', 'za', '27'],
					['South Korea (대한민국)', 'kr', '82'],
					['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'],
					['Spain (España)', 'es', '34'],
					['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'],
					['Sudan (‫السودان‬‎)', 'sd', '249'],
					['Suriname', 'sr', '597'],
					['Svalbard and Jan Mayen', 'sj', '47', 1, ['79']],
					['Sweden (Sverige)', 'se', '46'],
					['Switzerland (Schweiz)', 'ch', '41'],
					['Syria (‫سوريا‬‎)', 'sy', '963'],
					['Taiwan (台灣)', 'tw', '886'],
					['Tajikistan', 'tj', '992'],
					['Tanzania', 'tz', '255'],
					['Thailand (ไทย)', 'th', '66'],
					['Timor-Leste', 'tl', '670'],
					['Togo', 'tg', '228'],
					['Tokelau', 'tk', '690'],
					['Tonga', 'to', '676'],
					['Trinidad and Tobago', 'tt', '1', 22, ['868']],
					['Tunisia (‫تونس‬‎)', 'tn', '216'],
					['Turkey (Türkiye)', 'tr', '90'],
					['Turkmenistan', 'tm', '993'],
					['Turks and Caicos Islands', 'tc', '1', 23, ['649']],
					['Tuvalu', 'tv', '688'],
					['U.S. Virgin Islands', 'vi', '1', 24, ['340']],
					['Uganda', 'ug', '256'],
					['Ukraine (Україна)', 'ua', '380'],
					['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'],
					['United Kingdom', 'gb', '44', 0],
					['United States', 'us', '1', 0],
					['Uruguay', 'uy', '598'],
					['Uzbekistan (Oʻzbekiston)', 'uz', '998'],
					['Vanuatu', 'vu', '678'],
					['Vatican City (Città del Vaticano)', 'va', '39', 1, ['06698']],
					['Venezuela', 've', '58'],
					['Vietnam (Việt Nam)', 'vn', '84'],
					['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'],
					[
						'Western Sahara (‫الصحراء الغربية‬‎)',
						'eh',
						'212',
						1,
						['5288', '5289'],
					],
					['Yemen (‫اليمن‬‎)', 'ye', '967'],
					['Zambia', 'zm', '260'],
					['Zimbabwe', 'zw', '263'],
					['Åland Islands', 'ax', '358', 1, ['18']],
				],
				f = 0;
			f < e.length;
			f++
		) {
			const g = e[f];
			e[f] = {
				name: g[0],
				iso2: g[1],
				dialCode: g[2],
				priority: g[3] || 0,
				areaCodes: g[4] || null,
			};
		}
		const h = {
			getInstance: function (a) {
				const b = a.getAttribute('data-intl-tel-input-id');
				return window.intlTelInputGlobals.instances[b];
			},
			instances: {},
			documentReady: function () {
				return document.readyState === 'complete';
			},
		};
		typeof window === 'object' && (window.intlTelInputGlobals = h);
		let i = 0;
			const j = {
				allowDropdown: !0,
				autoHideDialCode: !0,
				autoPlaceholder: 'polite',
				customContainer: '',
				customPlaceholder: null,
				dropdownContainer: null,
				excludeCountries: [],
				formatOnDisplay: !0,
				geoIpLookup: null,
				hiddenInput: '',
				initialCountry: '',
				localizedCountries: null,
				nationalMode: !0,
				onlyCountries: [],
				placeholderNumberType: 'MOBILE',
				preferredCountries: ['us', 'gb'],
				separateDialCode: !1,
				utilsScript: '',
			};
			const k = [
				'800',
				'822',
				'833',
				'844',
				'855',
				'866',
				'877',
				'880',
				'881',
				'882',
				'883',
				'884',
				'885',
				'886',
				'887',
				'888',
				'889',
			];
			const l = function (a, b) {
				for (let c = Object.keys(a), d = 0; d < c.length; d++) b(c[d], a[c[d]]);
			};
			const m = function (a) {
				l(window.intlTelInputGlobals.instances, function (b) {
					window.intlTelInputGlobals.instances[b][a]();
				});
			};
			const n = (function () {
				function c(a, d) {
					const e = this;
					b(this, c),
						(this.id = i++),
						(this.a = a),
						(this.b = null),
						(this.c = null);
					const f = d || {};
					(this.d = {}),
						l(j, function (a, b) {
							e.d[a] = f.hasOwnProperty(a) ? f[a] : b;
						}),
						(this.e = Boolean(a.getAttribute('placeholder')));
				}
				return (
					d(c, [
						{
							key: '_init',
							value: function () {
								const a = this;
								if (
									(this.d.nationalMode && (this.d.autoHideDialCode = !1),
									this.d.separateDialCode &&
										(this.d.autoHideDialCode = this.d.nationalMode = !1),
									(this.g =
										/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
											navigator.userAgent
										)),
									this.g &&
										(document.body.classList.add('iti-mobile'),
										this.d.dropdownContainer ||
											(this.d.dropdownContainer = document.body)),
									typeof Promise !== 'undefined')
								) {
									const b = new Promise(function (b, c) {
											(a.h = b), (a.i = c);
										});
										const c = new Promise(function (b, c) {
											(a.i0 = b), (a.i1 = c);
										});
									this.promise = Promise.all([b, c]);
								} else
									(this.h = this.i = function () {}),
										(this.i0 = this.i1 = function () {});
								(this.s = {}),
									this._b(),
									this._f(),
									this._h(),
									this._i(),
									this._i3();
							},
						},
						{
							key: '_b',
							value: function () {
								this._d(),
									this._d2(),
									this._e(),
									this.d.localizedCountries && this._d0(),
									(this.d.onlyCountries.length || this.d.localizedCountries) &&
										this.p.sort(this._d1);
							},
						},
						{
							key: '_c',
							value: function (b, c, d) {
								c.length > this.countryCodeMaxLen &&
									(this.countryCodeMaxLen = c.length),
									this.q.hasOwnProperty(c) || (this.q[c] = []);
								for (let e = 0; e < this.q[c].length; e++)
									if (this.q[c][e] === b) return;
								const f = d !== a ? d : this.q[c].length;
								this.q[c][f] = b;
							},
						},
						{
							key: '_d',
							value: function () {
								if (this.d.onlyCountries.length) {
									const a = this.d.onlyCountries.map(function (a) {
										return a.toLowerCase();
									});
									this.p = e.filter(function (b) {
										return a.indexOf(b.iso2) > -1;
									});
								} else if (this.d.excludeCountries.length) {
									const b = this.d.excludeCountries.map(function (a) {
										return a.toLowerCase();
									});
									this.p = e.filter(function (a) {
										return b.indexOf(a.iso2) === -1;
									});
								} else this.p = e;
							},
						},
						{
							key: '_d0',
							value: function () {
								for (let a = 0; a < this.p.length; a++) {
									const b = this.p[a].iso2.toLowerCase();
									this.d.localizedCountries.hasOwnProperty(b) &&
										(this.p[a].name = this.d.localizedCountries[b]);
								}
							},
						},
						{
							key: '_d1',
							value: function (a, b) {
								return a.name.localeCompare(b.name);
							},
						},
						{
							key: '_d2',
							value: function () {
								(this.countryCodeMaxLen = 0),
									(this.dialCodes = {}),
									(this.q = {});
								for (let a = 0; a < this.p.length; a++) {
									const b = this.p[a];
									this.dialCodes[b.dialCode] ||
										(this.dialCodes[b.dialCode] = !0),
										this._c(b.iso2, b.dialCode, b.priority);
								}
								for (let c = 0; c < this.p.length; c++) {
									const d = this.p[c];
									if (d.areaCodes)
										for (
											let e = this.q[d.dialCode][0], f = 0;
											f < d.areaCodes.length;
											f++
										) {
											for (var g = d.areaCodes[f], h = 1; h < g.length; h++) {
												const i = d.dialCode + g.substr(0, h);
												this._c(e, i), this._c(d.iso2, i);
											}
											this._c(d.iso2, d.dialCode + g);
										}
								}
							},
						},
						{
							key: '_e',
							value: function () {
								this.preferredCountries = [];
								for (let a = 0; a < this.d.preferredCountries.length; a++) {
									const b = this.d.preferredCountries[a].toLowerCase();
										const c = this._y(b, !1, !0);
									c && this.preferredCountries.push(c);
								}
							},
						},
						{
							key: '_e2',
							value: function (a, b, c) {
								const d = document.createElement(a);
								return (
									b &&
										l(b, function (a, b) {
											return d.setAttribute(a, b);
										}),
									c && c.appendChild(d),
									d
								);
							},
						},
						{
							key: '_f',
							value: function () {
								this.a.hasAttribute('autocomplete') ||
									(this.a.form && this.a.form.hasAttribute('autocomplete')) ||
									this.a.setAttribute('autocomplete', 'off');
								let a = 'iti';
								this.d.allowDropdown && (a += ' iti--allow-dropdown'),
									this.d.separateDialCode && (a += ' iti--separate-dial-code'),
									this.d.customContainer &&
										((a += ' '), (a += this.d.customContainer));
								const b = this._e2('div', { class: a });
								if (
									(this.a.parentNode.insertBefore(b, this.a),
									(this.k = this._e2(
										'div',
										{ class: 'iti__flag-container' },
										b
									)),
									b.appendChild(this.a),
									(this.selectedFlag = this._e2(
										'div',
										{
											class: 'iti__selected-flag',
											role: 'combobox',
											'aria-controls': 'iti-'.concat(
												this.id,
												'__country-listbox'
											),
											'aria-owns': 'iti-'.concat(this.id, '__country-listbox'),
											'aria-expanded': 'false',
										},
										this.k
									)),
									(this.l = this._e2(
										'div',
										{ class: 'iti__flag' },
										this.selectedFlag
									)),
									this.d.separateDialCode &&
										(this.t = this._e2(
											'div',
											{ class: 'iti__selected-dial-code' },
											this.selectedFlag
										)),
									this.d.allowDropdown &&
										(this.selectedFlag.setAttribute('tabindex', '0'),
										(this.u = this._e2(
											'div',
											{ class: 'iti__arrow' },
											this.selectedFlag
										)),
										(this.m = this._e2('ul', {
											class: 'iti__country-list iti__hide',
											id: 'iti-'.concat(this.id, '__country-listbox'),
											role: 'listbox',
											'aria-label': 'List of countries',
										})),
										this.preferredCountries.length &&
											(this._g(this.preferredCountries, 'iti__preferred', !0),
											this._e2(
												'li',
												{
													class: 'iti__divider',
													role: 'separator',
													'aria-disabled': 'true',
												},
												this.m
											)),
										this._g(this.p, 'iti__standard'),
										this.d.dropdownContainer
											? ((this.dropdown = this._e2('div', {
													class: 'iti iti--container',
											  })),
											  this.dropdown.appendChild(this.m))
											: this.k.appendChild(this.m)),
									this.d.hiddenInput)
								) {
									let c = this.d.hiddenInput;
										const d = this.a.getAttribute('name');
									if (d) {
										const e = d.lastIndexOf('[');
										e !== -1 &&
											(c = ''.concat(d.substr(0, e), '[').concat(c, ']'));
									}
									(this.hiddenInput = this._e2('input', {
										type: 'hidden',
										name: c,
									})),
										b.appendChild(this.hiddenInput);
								}
							},
						},
						{
							key: '_g',
							value: function (a, b, c) {
								for (var d = '', e = 0; e < a.length; e++) {
									const f = a[e];
										const g = c ? '-preferred' : '';
									(d += '<li class=\'iti__country '
										.concat(b, '\' tabIndex=\'-1\' id=\'iti-')
										.concat(this.id, '__item-')
										.concat(f.iso2)
										.concat(g, '\' role=\'option\' data-dial-code=\'')
										.concat(f.dialCode, '\' data-country-code=\'')
										.concat(f.iso2, '\' aria-selected=\'false\'>')),
										(d +=
											'<div class=\'iti__flag-box\'><div class=\'iti__flag iti__'.concat(
												f.iso2,
												'\'></div></div>'
											)),
										(d += '<span class=\'iti__country-name\'>'.concat(
											f.name,
											'</span>'
										)),
										(d += '<span class=\'iti__dial-code\'>+'.concat(
											f.dialCode,
											'</span>'
										)),
										(d += '</li>');
								}
								this.m.insertAdjacentHTML('beforeend', d);
							},
						},
						{
							key: '_h',
							value: function () {
								const a = this.a.getAttribute('value');
									const b = this.a.value;
									const c = a && a.charAt(0) === '+' && (!b || b.charAt(0) !== '+');
									const d = c ? a : b;
									const e = this._5(d);
									const f = this._w(d);
									const g = this.d;
									const h = g.initialCountry;
									const i = g.nationalMode;
									const j = g.autoHideDialCode;
									const k = g.separateDialCode;
								e && !f
									? this._v(d)
									: h !== 'auto' &&
									  (h
											? this._z(h.toLowerCase())
											: e && f
											? this._z('us')
											: ((this.j = this.preferredCountries.length
													? this.preferredCountries[0].iso2
													: this.p[0].iso2),
											  d || this._z(this.j)),
									  d ||
											i ||
											j ||
											k ||
											(this.a.value = '+'.concat(this.s.dialCode))),
									d && this._u(d);
							},
						},
						{
							key: '_i',
							value: function () {
								this._j(),
									this.d.autoHideDialCode && this._l(),
									this.d.allowDropdown && this._i2(),
									this.hiddenInput && this._i0();
							},
						},
						{
							key: '_i0',
							value: function () {
								const a = this;
								(this._a14 = function () {
									a.hiddenInput.value = a.getNumber();
								}),
									this.a.form &&
										this.a.form.addEventListener('submit', this._a14);
							},
						},
						{
							key: '_i1',
							value: function () {
								for (var a = this.a; a && a.tagName !== 'LABEL'; )
									a = a.parentNode;
								return a;
							},
						},
						{
							key: '_i2',
							value: function () {
								const a = this;
								this._a9 = function (b) {
									a.m.classList.contains('iti__hide')
										? a.a.focus()
										: b.preventDefault();
								};
								const b = this._i1();
								b && b.addEventListener('click', this._a9),
									(this._a10 = function () {
										!a.m.classList.contains('iti__hide') ||
											a.a.disabled ||
											a.a.readOnly ||
											a._n();
									}),
									this.selectedFlag.addEventListener('click', this._a10),
									(this._a11 = function (b) {
										a.m.classList.contains('iti__hide') &&
											[
													'ArrowUp',
													'Up',
													'ArrowDown',
													'Down',
													' ',
													'Enter',
												].indexOf(b.key) !==
												-1 &&
											(b.preventDefault(), b.stopPropagation(), a._n()),
											b.key === 'Tab' && a._2();
									}),
									this.k.addEventListener('keydown', this._a11);
							},
						},
						{
							key: '_i3',
							value: function () {
								const a = this;
								this.d.utilsScript && !window.intlTelInputUtils
									? window.intlTelInputGlobals.documentReady()
										? window.intlTelInputGlobals.loadUtils(this.d.utilsScript)
										: window.addEventListener('load', function () {
												window.intlTelInputGlobals.loadUtils(a.d.utilsScript);
										  })
									: this.i0(),
									this.d.initialCountry === 'auto' ? this._i4() : this.h();
							},
						},
						{
							key: '_i4',
							value: function () {
								window.intlTelInputGlobals.autoCountry
									? this.handleAutoCountry()
									: window.intlTelInputGlobals.startedLoadingAutoCountry ||
									  ((window.intlTelInputGlobals.startedLoadingAutoCountry =
											!0),
									  typeof this.d.geoIpLookup === 'function' &&
											this.d.geoIpLookup(
												function (a) {
													(window.intlTelInputGlobals.autoCountry =
														a.toLowerCase()),
														setTimeout(function () {
															return m('handleAutoCountry');
														});
												},
												function () {
													return m('rejectAutoCountryPromise');
												}
											));
							},
						},
						{
							key: '_j',
							value: function () {
								const a = this;
								(this._a12 = function () {
									a._v(a.a.value) && a._m2CountryChange();
								}),
									this.a.addEventListener('keyup', this._a12),
									(this._a13 = function () {
										setTimeout(a._a12);
									}),
									this.a.addEventListener('cut', this._a13),
									this.a.addEventListener('paste', this._a13);
							},
						},
						{
							key: '_j2',
							value: function (a) {
								const b = this.a.getAttribute('maxlength');
								return b && a.length > b ? a.substr(0, b) : a;
							},
						},
						{
							key: '_l',
							value: function () {
								const a = this;
								(this._a8 = function () {
									a._l2();
								}),
									this.a.form &&
										this.a.form.addEventListener('submit', this._a8),
									this.a.addEventListener('blur', this._a8);
							},
						},
						{
							key: '_l2',
							value: function () {
								if (this.a.value.charAt(0) === '+') {
									const a = this._m(this.a.value);
									(a && this.s.dialCode !== a) || (this.a.value = '');
								}
							},
						},
						{
							key: '_m',
							value: function (a) {
								return a.replace(/\D/g, '');
							},
						},
						{
							key: '_m2',
							value: function (a) {
								const b = document.createEvent('Event');
								b.initEvent(a, !0, !0), this.a.dispatchEvent(b);
							},
						},
						{
							key: '_n',
							value: function () {
								this.m.classList.remove('iti__hide'),
									this.selectedFlag.setAttribute('aria-expanded', 'true'),
									this._o(),
									this.b && (this._x(this.b, !1), this._3(this.b, !0)),
									this._p(),
									this.u.classList.add('iti__arrow--up'),
									this._m2('open:countrydropdown');
							},
						},
						{
							key: '_n2',
							value: function (a, b, c) {
								c && !a.classList.contains(b)
									? a.classList.add(b)
									: !c && a.classList.contains(b) && a.classList.remove(b);
							},
						},
						{
							key: '_o',
							value: function () {
								const a = this;
								if (
									(this.d.dropdownContainer &&
										this.d.dropdownContainer.appendChild(this.dropdown),
									!this.g)
								) {
									const b = this.a.getBoundingClientRect();
										const c =
											window.pageYOffset || document.documentElement.scrollTop;
										const d = b.top + c;
										const e = this.m.offsetHeight;
										const f = d + this.a.offsetHeight + e < c + window.innerHeight;
										const g = d - e > c;
									if (
										(this._n2(this.m, 'iti__country-list--dropup', !f && g),
										this.d.dropdownContainer)
									) {
										const h = !f && g ? 0 : this.a.offsetHeight;
										(this.dropdown.style.top = ''.concat(d + h, 'px')),
											(this.dropdown.style.left = ''.concat(
												b.left + document.body.scrollLeft,
												'px'
											)),
											(this._a4 = function () {
												return a._2();
											}),
											window.addEventListener('scroll', this._a4);
									}
								}
							},
						},
						{
							key: '_o2',
							value: function (a) {
								for (
									var b = a;
									b && b !== this.m && !b.classList.contains('iti__country');

								)
									b = b.parentNode;
								return b === this.m ? null : b;
							},
						},
						{
							key: '_p',
							value: function () {
								const a = this;
								(this._a0 = function (b) {
									const c = a._o2(b.target);
									c && a._x(c, !1);
								}),
									this.m.addEventListener('mouseover', this._a0),
									(this._a1 = function (b) {
										const c = a._o2(b.target);
										c && a._1(c);
									}),
									this.m.addEventListener('click', this._a1);
								let b = !0;
								(this._a2 = function () {
									b || a._2(), (b = !1);
								}),
									document.documentElement.addEventListener('click', this._a2);
								let c = '';
									let d = null;
								(this._a3 = function (b) {
									b.preventDefault(),
										b.key === 'ArrowUp' ||
										b.key === 'Up' ||
										b.key === 'ArrowDown' ||
										b.key === 'Down'
											? a._q(b.key)
											: b.key === 'Enter'
											? a._r()
											: b.key === 'Escape'
											? a._2()
											: /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) &&
											  (d && clearTimeout(d),
											  (c += b.key.toLowerCase()),
											  a._s(c),
											  (d = setTimeout(function () {
													c = '';
											  }, 1e3)));
								}),
									document.addEventListener('keydown', this._a3);
							},
						},
						{
							key: '_q',
							value: function (a) {
								let b =
									a === 'ArrowUp' || a === 'Up'
										? this.c.previousElementSibling
										: this.c.nextElementSibling;
								b &&
									(b.classList.contains('iti__divider') &&
										(b =
											a === 'ArrowUp' || a === 'Up'
												? b.previousElementSibling
												: b.nextElementSibling),
									this._x(b, !0));
							},
						},
						{
							key: '_r',
							value: function () {
								this.c && this._1(this.c);
							},
						},
						{
							key: '_s',
							value: function (a) {
								for (let b = 0; b < this.p.length; b++)
									if (this._t(this.p[b].name, a)) {
										const c = this.m.querySelector(
											'#iti-'.concat(this.id, '__item-').concat(this.p[b].iso2)
										);
										this._x(c, !1), this._3(c, !0);
										break;
									}
							},
						},
						{
							key: '_t',
							value: function (a, b) {
								return a.substr(0, b.length).toLowerCase() === b;
							},
						},
						{
							key: '_u',
							value: function (a) {
								let b = a;
								if (
									this.d.formatOnDisplay &&
									window.intlTelInputUtils &&
									this.s
								) {
									const c =
											!this.d.separateDialCode &&
											(this.d.nationalMode || b.charAt(0) !== '+');
										const d = intlTelInputUtils.numberFormat;
										const e = d.NATIONAL;
										const f = d.INTERNATIONAL;
										const g = c ? e : f;
									b = intlTelInputUtils.formatNumber(b, this.s.iso2, g);
								}
								(b = this._7(b)), (this.a.value = b);
							},
						},
						{
							key: '_v',
							value: function (a) {
								let b = a;
									const c = this.s.dialCode;
									const d = c === '1';
								b &&
									this.d.nationalMode &&
									d &&
									b.charAt(0) !== '+' &&
									(b.charAt(0) !== '1' && (b = '1'.concat(b)),
									(b = '+'.concat(b))),
									this.d.separateDialCode &&
										c &&
										b.charAt(0) !== '+' &&
										(b = '+'.concat(c).concat(b));
								const e = this._5(b, !0);
									const f = this._m(b);
									let g = null;
								if (e) {
									const h = this.q[this._m(e)];
										const i =
											h.indexOf(this.s.iso2) !== -1 && f.length <= e.length - 1;
									if (!(c === '1' && this._w(f)) && !i)
										for (let j = 0; j < h.length; j++)
											if (h[j]) {
												g = h[j];
												break;
											}
								} else
									b.charAt(0) === '+' && f.length
										? (g = '')
										: (b && b !== '+') || (g = this.j);
								return g !== null && this._z(g);
							},
						},
						{
							key: '_w',
							value: function (a) {
								const b = this._m(a);
								if (b.charAt(0) === '1') {
									const c = b.substr(1, 3);
									return k.indexOf(c) !== -1;
								}
								return !1;
							},
						},
						{
							key: '_x',
							value: function (a, b) {
								const c = this.c;
								c && c.classList.remove('iti__highlight'),
									(this.c = a),
									this.c.classList.add('iti__highlight'),
									b && this.c.focus();
							},
						},
						{
							key: '_y',
							value: function (a, b, c) {
								for (let d = b ? e : this.p, f = 0; f < d.length; f++)
									if (d[f].iso2 === a) return d[f];
								if (c) return null;
								throw new Error('No country data for \''.concat(a, '\''));
							},
						},
						{
							key: '_z',
							value: function (a) {
								const b = this.s.iso2 ? this.s : {};
								(this.s = a ? this._y(a, !1, !1) : {}),
									this.s.iso2 && (this.j = this.s.iso2),
									this.l.setAttribute('class', 'iti__flag iti__'.concat(a));
								const c = a
									? ''.concat(this.s.name, ': +').concat(this.s.dialCode)
									: 'Unknown';
								if (
									(this.selectedFlag.setAttribute('title', c),
									this.d.separateDialCode)
								) {
									const d = this.s.dialCode ? '+'.concat(this.s.dialCode) : '';
									this.t.innerHTML = d;
									const e = this.selectedFlag.offsetWidth || this._z2();
									this.a.style.paddingLeft = ''.concat(e + 6, 'px');
								}
								if ((this._0(), this.d.allowDropdown)) {
									const f = this.b;
									if (
										(f &&
											(f.classList.remove('iti__active'),
											f.setAttribute('aria-selected', 'false')),
										a)
									) {
										const g =
											this.m.querySelector(
												'#iti-'
													.concat(this.id, '__item-')
													.concat(a, '-preferred')
											) ||
											this.m.querySelector(
												'#iti-'.concat(this.id, '__item-').concat(a)
											);
										g.setAttribute('aria-selected', 'true'),
											g.classList.add('iti__active'),
											(this.b = g),
											this.selectedFlag.setAttribute(
												'aria-activedescendant',
												g.getAttribute('id')
											);
									}
								}
								return b.iso2 !== a;
							},
						},
						{
							key: '_z2',
							value: function () {
								const a = this.a.parentNode.cloneNode();
								(a.style.visibility = 'hidden'), document.body.appendChild(a);
								const b = this.k.cloneNode();
								a.appendChild(b);
								const c = this.selectedFlag.cloneNode(!0);
								b.appendChild(c);
								const d = c.offsetWidth;
								return a.parentNode.removeChild(a), d;
							},
						},
						{
							key: '_0',
							value: function () {
								const a =
									this.d.autoPlaceholder === 'aggressive' ||
									(!this.e && this.d.autoPlaceholder === 'polite');
								if (window.intlTelInputUtils && a) {
									const b =
											intlTelInputUtils.numberType[
												this.d.placeholderNumberType
											];
										let c = this.s.iso2
											? intlTelInputUtils.getExampleNumber(
													this.s.iso2,
													this.d.nationalMode,
													b
											  )
											: '';
									(c = this._7(c)),
										typeof this.d.customPlaceholder === 'function' &&
											(c = this.d.customPlaceholder(c, this.s)),
										this.a.setAttribute('placeholder', c);
								}
							},
						},
						{
							key: '_1',
							value: function (a) {
								const b = this._z(a.getAttribute('data-country-code'));
								this._2(),
									this._4(a.getAttribute('data-dial-code'), !0),
									this.a.focus();
								const c = this.a.value.length;
								this.a.setSelectionRange(c, c), b && this._m2CountryChange();
							},
						},
						{
							key: '_2',
							value: function () {
								this.m.classList.add('iti__hide'),
									this.selectedFlag.setAttribute('aria-expanded', 'false'),
									this.u.classList.remove('iti__arrow--up'),
									document.removeEventListener('keydown', this._a3),
									document.documentElement.removeEventListener(
										'click',
										this._a2
									),
									this.m.removeEventListener('mouseover', this._a0),
									this.m.removeEventListener('click', this._a1),
									this.d.dropdownContainer &&
										(this.g || window.removeEventListener('scroll', this._a4),
										this.dropdown.parentNode &&
											this.dropdown.parentNode.removeChild(this.dropdown)),
									this._m2('close:countrydropdown');
							},
						},
						{
							key: '_3',
							value: function (a, b) {
								const c = this.m;
									const d = window.pageYOffset || document.documentElement.scrollTop;
									const e = c.offsetHeight;
									const f = c.getBoundingClientRect().top + d;
									const g = f + e;
									const h = a.offsetHeight;
									const i = a.getBoundingClientRect().top + d;
									const j = i + h;
									let k = i - f + c.scrollTop;
									const l = e / 2 - h / 2;
								if (i < f) b && (k -= l), (c.scrollTop = k);
								else if (j > g) {
									b && (k += l);
									const m = e - h;
									c.scrollTop = k - m;
								}
							},
						},
						{
							key: '_4',
							value: function (a, b) {
								let c;
									const d = this.a.value;
									const e = '+'.concat(a);
								if (d.charAt(0) === '+') {
									const f = this._5(d);
									c = f ? d.replace(f, e) : e;
								} else {
									if (this.d.nationalMode || this.d.separateDialCode) return;
									if (d) c = e + d;
									else {
										if (!b && this.d.autoHideDialCode) return;
										c = e;
									}
								}
								this.a.value = c;
							},
						},
						{
							key: '_5',
							value: function (a, b) {
								let c = '';
								if (a.charAt(0) === '+')
									for (let d = '', e = 0; e < a.length; e++) {
										const f = a.charAt(e);
										if (!isNaN(parseInt(f, 10))) {
											if (((d += f), b)) this.q[d] && (c = a.substr(0, e + 1));
											else if (this.dialCodes[d]) {
												c = a.substr(0, e + 1);
												break;
											}
											if (d.length === this.countryCodeMaxLen) break;
										}
									}
								return c;
							},
						},
						{
							key: '_6',
							value: function () {
								const a = this.a.value.trim();
									const b = this.s.dialCode;
									const c = this._m(a);
								return (
									(this.d.separateDialCode && a.charAt(0) !== '+' && b && c
										? '+'.concat(b)
										: '') + a
								);
							},
						},
						{
							key: '_7',
							value: function (a) {
								let b = a;
								if (this.d.separateDialCode) {
									let c = this._5(b);
									if (c) {
										c = '+'.concat(this.s.dialCode);
										const d =
											b[c.length] === ' ' || b[c.length] === '-'
												? c.length + 1
												: c.length;
										b = b.substr(d);
									}
								}
								return this._j2(b);
							},
						},
						{
							key: '_m2CountryChange',
							value: function () {
								this._m2('countrychange');
							},
						},
						{
							key: 'handleAutoCountry',
							value: function () {
								this.d.initialCountry === 'auto' &&
									((this.j = window.intlTelInputGlobals.autoCountry),
									this.a.value || this.setCountry(this.j),
									this.h());
							},
						},
						{
							key: 'handleUtils',
							value: function () {
								window.intlTelInputUtils &&
									(this.a.value && this._u(this.a.value), this._0()),
									this.i0();
							},
						},
						{
							key: 'destroy',
							value: function () {
								const a = this.a.form;
								if (this.d.allowDropdown) {
									this._2(),
										this.selectedFlag.removeEventListener('click', this._a10),
										this.k.removeEventListener('keydown', this._a11);
									const b = this._i1();
									b && b.removeEventListener('click', this._a9);
								}
								this.hiddenInput &&
									a &&
									a.removeEventListener('submit', this._a14),
									this.d.autoHideDialCode &&
										(a && a.removeEventListener('submit', this._a8),
										this.a.removeEventListener('blur', this._a8)),
									this.a.removeEventListener('keyup', this._a12),
									this.a.removeEventListener('cut', this._a13),
									this.a.removeEventListener('paste', this._a13),
									this.a.removeAttribute('data-intl-tel-input-id');
								const c = this.a.parentNode;
								c.parentNode.insertBefore(this.a, c),
									c.parentNode.removeChild(c),
									delete window.intlTelInputGlobals.instances[this.id];
							},
						},
						{
							key: 'getExtension',
							value: function () {
								return window.intlTelInputUtils
									? intlTelInputUtils.getExtension(this._6(), this.s.iso2)
									: '';
							},
						},
						{
							key: 'getNumber',
							value: function (a) {
								if (window.intlTelInputUtils) {
									const b = this.s.iso2;
									return intlTelInputUtils.formatNumber(this._6(), b, a);
								}
								return '';
							},
						},
						{
							key: 'getNumberType',
							value: function () {
								return window.intlTelInputUtils
									? intlTelInputUtils.getNumberType(this._6(), this.s.iso2)
									: -99;
							},
						},
						{
							key: 'getSelectedCountryData',
							value: function () {
								return this.s;
							},
						},
						{
							key: 'getValidationError',
							value: function () {
								if (window.intlTelInputUtils) {
									const a = this.s.iso2;
									return intlTelInputUtils.getValidationError(this._6(), a);
								}
								return -99;
							},
						},
						{
							key: 'isValidNumber',
							value: function () {
								const a = this._6().trim();
									const b = this.d.nationalMode ? this.s.iso2 : '';
								return window.intlTelInputUtils
									? intlTelInputUtils.isValidNumber(a, b)
									: null;
							},
						},
						{
							key: 'setCountry',
							value: function (a) {
								const b = a.toLowerCase();
								this.l.classList.contains('iti__'.concat(b)) ||
									(this._z(b),
									this._4(this.s.dialCode, !1),
									this._m2CountryChange());
							},
						},
						{
							key: 'setNumber',
							value: function (a) {
								const b = this._v(a);
								this._u(a), b && this._m2CountryChange();
							},
						},
						{
							key: 'setPlaceholderNumberType',
							value: function (a) {
								(this.d.placeholderNumberType = a), this._0();
							},
						},
					]),
					c
				);
			})();
		h.getCountryData = function () {
			return e;
		};
		const o = function (a, b, c) {
			const d = document.createElement('script');
			(d.onload = function () {
				m('handleUtils'), b && b();
			}),
				(d.onerror = function () {
					m('rejectUtilsScriptPromise'), c && c();
				}),
				(d.className = 'iti-load-utils'),
				(d.async = !0),
				(d.src = a),
				document.body.appendChild(d);
		};
		return (
			(h.loadUtils = function (a) {
				if (
					!window.intlTelInputUtils &&
					!window.intlTelInputGlobals.startedLoadingUtilsScript
				) {
					if (
						((window.intlTelInputGlobals.startedLoadingUtilsScript = !0),
						typeof Promise !== 'undefined')
					)
						return new Promise(function (b, c) {
							return o(a, b, c);
						});
					o(a);
				}
				return null;
			}),
			(h.defaults = j),
			(h.version = '17.0.16'),
			function (a, b) {
				const c = new n(a, b);
				return (
					c._init(),
					a.setAttribute('data-intl-tel-input-id', c.id),
					(window.intlTelInputGlobals.instances[c.id] = c),
					c
				);
			}
		);
	})();
});
