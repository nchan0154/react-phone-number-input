import React from 'react'

import Phone,
{
	phone_number_format,
	phoneNumberFormat,
	is_valid_phone_number,
	isValidPhoneNumber,
	format_phone_number,
	formatPhoneNumber,
	format_local,
	formatLocal,
	format_phone_number_international,
	formatPhoneNumberInternational,
	plaintext_local,
	plaintextLocal,
	plaintext_international,
	plaintextInternational,
	parse_phone_number,
	parsePhoneNumber,
	country,
	country_codes,
	countryCodes,
	country_from_locale,
	countryFromLocale,
	edit_and_format,
	editAndFormat,
	parse_value,
	parseValue,
	format_value,
	formatValue
}
from '../index.es6'

describe(`exports`, function()
{
	it(`should export ES6`, function()
	{
		const render = (<Phone value="" format={ phone_number_format.RU } onChange={ () => {} }/>)
		
		phone_number_format.RU.city
		phoneNumberFormat.RU.city

		is_valid_phone_number('+79991234567', phone_number_format.RU)
		isValidPhoneNumber('+79991234567', phone_number_format.RU)

		format_phone_number('+79991234567', phone_number_format.RU)
		formatPhoneNumber('+79991234567', phone_number_format.RU)

		format_local('+79991234567', phone_number_format.RU)
		formatLocal('+79991234567', phone_number_format.RU)

		plaintext_local('+79991234567', phone_number_format.RU)
		plaintextLocal('+79991234567', phone_number_format.RU)

		plaintext_international('+79991234567', phone_number_format.RU)
		plaintextInternational('+79991234567', phone_number_format.RU)

		parse_phone_number('+79991234567', phone_number_format.RU)
		parsePhoneNumber('+79991234567', phone_number_format.RU)

		country()

		country_codes.should.be.an('array')
		countryCodes.should.be.an('array')

		country_from_locale()
		countryFromLocale()

		edit_and_format(undefined, '', 0)
		editAndFormat(undefined, '', 0)

		parse_value()
		parseValue()

		format_value()
		formatValue()
	})

	it(`should export CommonJS`, function()
	{
		const Phone = require('../index.common')

		const render = (<Phone value="" format={ Phone.phone_number_format.RU } onChange={ () => {} }/>)

		Phone.phone_number_format.RU.city
		Phone.phoneNumberFormat.RU.city

		Phone.is_valid_phone_number('+79991234567', Phone.phone_number_format.RU)
		Phone.isValidPhoneNumber('+79991234567', Phone.phone_number_format.RU)

		Phone.format_phone_number('+79991234567', Phone.phone_number_format.RU)
		Phone.formatPhoneNumber('+79991234567', Phone.phone_number_format.RU)

		Phone.format_local('+79991234567', Phone.phone_number_format.RU)
		Phone.formatLocal('+79991234567', Phone.phone_number_format.RU)

		Phone.plaintext_local('+79991234567', Phone.phone_number_format.RU)
		Phone.plaintextLocal('+79991234567', Phone.phone_number_format.RU)

		Phone.plaintext_international('+79991234567', Phone.phone_number_format.RU)
		Phone.plaintextInternational('+79991234567', Phone.phone_number_format.RU)
		
		Phone.parse_phone_number('+79991234567', Phone.phone_number_format.RU)
		Phone.parsePhoneNumber('+79991234567', Phone.phone_number_format.RU)

		Phone.country()

		Phone.country_codes.should.be.an('array')
		Phone.countryCodes.should.be.an('array')

		Phone.country_from_locale()
		Phone.countryFromLocale()

		Phone.edit_and_format(undefined, '', 0)
		Phone.editAndFormat(undefined, '', 0)

		Phone.parse_value()
		Phone.parseValue()

		Phone.format_value()
		Phone.formatValue()
	})
})