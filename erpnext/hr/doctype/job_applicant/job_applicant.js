// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// For license information, please see license.txt

// for communication
cur_frm.email_field = "email_id";

frappe.ui.form.on("Job Applicant", {
	setup: function (frm) {
		frm.make_methods = {
			'Employee': () => {
				frappe.new_doc("Employee", {
					'first_name': frm.doc.first_name,
					'last_name': frm.doc.last_name
				});
			}
		};
	},
	refresh: function (frm) {
		if (!frm.doc.__islocal) {
			if (frm.doc.__onload && frm.doc.__onload.job_offer) {
				frm.add_custom_button(__("Job Offer"), function () {
					frappe.set_route("Form", "Job Offer", frm.doc.__onload.job_offer);
				}, __("View"));
			} else {
				frm.add_custom_button(__("Job Offer"), function () {
					frappe.route_options = {
						"job_applicant": frm.doc.name,
						"applicant_name": frm.doc.applicant_name,
						"designation": frm.doc.job_opening,
					};
					frappe.new_doc("Job Offer");
				});
			}
		}

		frm.set_query("job_title", function () {
			return {
				filters: {
					'status': 'Open'
				}
			};
		});
	
		frm.set_df_property("resume_attachment", "reqd", frm.is_new() ? 0 : 1);
	}
});
