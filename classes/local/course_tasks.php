<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * block_course_tasks course users output class
 *
 * @package   block_course_tasks
 * @copyright  2021 Richard Jones <richardnz@outlook.com>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @see https://www.udemy.com/user/brad-traversy/
 */
namespace block_course_tasks\local;

use renderable;
use renderer_base;
use templatable;
use stdClass;

/**
 * block course_tasks: Create a new renderable object
 *
 * @copyright  2021 Richard Jones <richardnz@outlook.com>
 */

class course_tasks implements renderable, templatable {

    protected $courseid;

    public function __construct($courseid) {
        $this->courseid = $courseid;
    }
    // Prepare the data for output by the template.
    public function export_for_template(renderer_base $output) {
        global $USER;

        $data = new stdClass();

        // UI strings for Mustache.
        $data->addbutton = get_string('btn_add_task', 'block_course_tasks');
        $data->listing = get_string('listing', 'block_course_tasks');
        $data->clearbutton = get_string('btn_clear_tasks', 'block_course_tasks');

        return $data;
    }
}