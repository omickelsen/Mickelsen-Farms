import React, { Component } from 'react';
class Calendar extends Component {
  render() {
    return (
      <section className="calendar" id="calendar">
        <div className="container text-center">
          <h2>
            Calendar
          </h2>
          <p>
            Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, Per nihil dicant commodo an.
          </p>
        </div>
        <div className="calendar-grid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                {/* <a href="#"><img alt="" src="https://cdn.appzaib.com/public/bell/img/porf-1.jpg" />
                  <div className="calendar-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div></a> */}

                  


              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;