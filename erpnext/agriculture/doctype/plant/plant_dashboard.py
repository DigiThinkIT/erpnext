from __future__ import unicode_literals

from frappe import _


def get_data():
	return {
		'fieldname': 'plant',
		'non_standard_fieldnames': {
			'Destroyed Plant Log': 'category'
		},
		'transactions': [
			{
				'label': _('Manicure & Harvesting'),
				'items': ['Harvest']
			},
			{
				'label': _('Diseases & Additives'),
				'items': ['Plant Disease Diagnosis', 'Plant Additive Log', 'Destroyed Plant Log']
			}
		]
	}
