import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/firstServlet")
public class FirstServletApp extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public FirstServletApp() {
    	System.out.println("Servlet obj is created internally by container");
    }

	/** * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response) */
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String name = request.getParameter("uname");
		String city = request.getParameter("ucity");
		
		
		PrintWriter writer = response.getWriter();
		
		response.setContentType("text/html"); // Tell browser the response is HTML
//		writer.println("Hello " + name + ". I know you're from " + city + " city.");
		
		writer.println("<html> <head> <title>First Dynamic App</title> </head>");
		writer.println("<body bgColor='Cyan'>");
		writer.println("<h1><marquee>Welcome to the First Dynamic Webapp.</marquee></h1>");
		writer.println("<h2>Hello " + name + ". I know you're from " + city + " city.</h2>");
		writer.println("</body> </html>");
		
	}

}
