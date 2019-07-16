import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
    const [formData, setFormData] = useState({
        status: '',
        bio: '',
        skills: '',
        img: '',
        youtube: '',
        instagram: '',
        twitter: '',
        facebook: '',
        linkedin: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        status,
        bio,
        skills,
        img,
        youtube,
        instagram,
        twitter,
        facebook,
        linkedin
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <div className='container'>
                <h1 className="display-4 text-center">Create Your Profile</h1>
            <small className="d-block pb-3">* = required field</small>
            <form action="add-experience.html">
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="* Profile handle" name="handle" required />
                <small className="form-text text-muted">A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)</small>
                </div>
                <div className="form-group">
                <select className="form-control form-control-lg" name="status" value={status} onChange={e=> onChange(e)}>
                    <option value="0">* Select Professional Status</option>
                    <option value="Developer">Management</option>
                    <option value="Junior Developer">Boarding</option>
                    <option value="Senior Developer">Trainer</option>
                    <option value="Other">Other</option>
                </select>
                <small className="form-text text-muted">Give us an idea of where you are at in your career</small>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Skills" name="skills" value={skills} onChange={e => onChange(e)}/>
                <small className="form-text text-muted">Please use comma separated values (eg. boarding, training, education)</small>
                </div>
                <div className="form-group">
                <textarea className="form-control form-control-lg" placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
                <small className="form-text text-muted">Tell us a little about yourself</small>
                </div>

                <div className="mb-3">
                    <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">Add Social Network Links</button>
                        <span className="text-muted">Optional</span>
                </div>
                    {displaySocialInputs && (
                        <Fragment>
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fab fa-twitter"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control form-control-lg" placeholder="Twitter Profile URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
                            </div>

                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fab fa-facebook"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control form-control-lg" placeholder="Facebook Page URL" name="facebook" value={facebook} onChange={e => onChange(e)} />
                            </div>

                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fab fa-linkedin"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control form-control-lg" placeholder="Linkedin Profile URL" name="linkedin" value={youtube} onChange={e => onChange(e)} />
                            </div>

                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fab fa-youtube"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control form-control-lg" placeholder="YouTube Channel URL" name="youtube" value={youtube} onChange={e => onChange(e)} />
                            </div>

                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fab fa-instagram"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control form-control-lg" placeholder="Instagram Page URL" name="instagram" value={instagram} onChange={e => onChange(e)}/>
                            </div>
                        </Fragment>)}
                <br/>
                <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
            </div>
        </Fragment>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile;