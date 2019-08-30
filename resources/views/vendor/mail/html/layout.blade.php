<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
    <style>
        .text-content p{
          font-family:'arial';
          text-align:center;
          color:#37396c;
          font-size:22px;
          font-weight:normal;
          width: 90%;
          margin:auto;
          padding-bottom:10px;
        }
        .text-content h1{
          font-family:'arial';
          text-align:center;
          color:#37396c;
          font-size:26px;
          font-weight:bold;
          width: 90%;
          margin:auto;
          padding-bottom:30px;
        }
        @media only screen and (max-width: 600px) {
            .inner-body {
                width: 100% !important;
            }

            .footer {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 500px) {
            .button {
                width: 100% !important;
            }
        }
    </style>

    <!-- <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
            <td align="center">
                <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    {{ $header ?? '' }}
                    <tr>
                        <td class="body" width="100%" cellpadding="0" cellspacing="0">
                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td class="content-cell">
                                        {{ Illuminate\Mail\Markdown::parse($slot) }}

                                        {{ $subcopy ?? '' }}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    {{ $footer ?? '' }}
                </table>
            </td>
        </tr>
    </table> -->
    <table width="600" height="" border="0" align="center" cellpadding="0" cellspacing="0" id="Table_01">
      <tr>
    		<td colspan="5" align="left" valign="top">
          <!--{{ $header ?? '' }}-->
        </td>
    	</tr>

    	<tr>
    		<td align="left" valign="top">
          <table width="600" height="" border="0" cellpadding="0" cellspacing="0">
    				<tr>
    					<td align="left" valign="top" width="58px" style="background:url(https://mmb-mailer-assets.s3.eu-west-3.amazonaws.com/image_06.jpg) repeat;">
    					</td>
    					<td colspan="3" align="left" valign="middle">
    						<table width="485px" border="0" cellspacing="0" cellpadding="0" height="" style="font-family:'arial'; color:#37396c; font-size:18px; font-weight:normal;padding:0 0 30px 0;">
    							<tr>
    								<td align="center" valign="middle" class="text-content" style="line-height:35px;">
                      {{ Illuminate\Mail\Markdown::parse($slot) }}
                      <!--{{ $subcopy ?? '' }}-->
    								</td>
    							</tr>
    						</table>
    					</td>
    					<td align="left" valign="top" width="57px" style="background:url(https://mmb-mailer-assets.s3.eu-west-3.amazonaws.com/image_08.jpg) repeat;">
    					</td>
    				</tr>
    			</table>
    		</td>
    	</tr>
      <tr>
        <td align="left" valign="top">
          <table width="600" height="" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="left" valign="top" width="58px" style="background:url(https://mmb-mailer-assets.s3.eu-west-3.amazonaws.com/image_16.jpg) repeat;">
              </td>
              <td align="left" valign="top">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" height="" style="font-family:'arial'; background:#edf3ff; color:#37396c; font-size:18px; font-weight:normal; padding:30px 0;">
                  <tr>
                    <td align="center" valign="middle" style="line-height:45px;min-width:455px;">
                      © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
                      <!--{{ $footer ?? '' }}-->
                    </td>
                  </tr>
                </table>
              </td>
              <td align="left" valign="top" width="57px" style="background:url(https://mmb-mailer-assets.s3.eu-west-3.amazonaws.com/image_18.jpg) repeat;">
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
</body>
</html>
