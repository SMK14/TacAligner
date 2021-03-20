import React from 'react'

export const ForgotPassword = () => {

    const onSubmit = async e => {
        e.preventDefault();
    }

    return (
        <div>
            <div id="single-wrapper">
        <form action="#" class="frm-single" onSubmit = {e => onSubmit(e)}>
            <div class="inside">
                <div class="title"><img src="assets/images/tac-logo.png" alt=""/></div>
                {/* <!-- /.title --> */}
                <div class="frm-title margin-top-20"><strong>Forgot Password</strong></div>
                {/* <!-- /.frm-title --> */}
                <div class="frm-input"><input type="text" placeholder="Username"  class="frm-inp"/><i class="fa fa-user frm-ico"></i></div>
                {/* <!-- /.clearfix --> */}
                <button type="submit" class="frm-submit">Send Link<i class="fa fa-arrow-circle-right"></i></button>

                {/* <!-- /.footer --> */}
            </div>
            {/* <!-- .inside --> */}
        </form>
        {/* <!-- /.frm-single --> */}
    </div>
        </div>
    )
}
