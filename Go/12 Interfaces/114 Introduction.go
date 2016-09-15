/*
    Interfaces
        - allow us to do substitutability.
        - also "polymorphism"

    Interfaces are a type just like struct, float64, int64 etc..
*/
/*
    "Polymorphism is the ability to write code that can take on different behavior through the implementation
    of types. Once a type implements an interface, an entire world of functionality can be opened up to values
    of that type."

    - Bill Kennedy

    Just like you can embed struct types, you can also embded interface types within interfaces. 

    type beautiful interface {
        simple
        elusive
    }

    type simple interface {
        show()
    }

    type elusive interface {
        hide()
    }

    // Something simple
    type homework struct {
        questions map[string]string
        score int
    }

    func (h homework) show() {
        // for each question (key) in questions, write the correct answer (value)
        for k, _ := range h.questions {
            switch k {
                case `What color is the sky on Earth on a "good day"?`:
                    h[k] = `Blue.`
                case `Who is John Galt?`:
                    h[k] = `A character in the book Atlas Shrugged.`
                default:
                    h[k] = `It doesn't matter.`
            }
        }
    }

    // Something elusive
    type ninja struct {
        skill int
        trainingSchool string
        hidden bool
    }

    func (n ninja) hide() {
        // stealth
        n.hidden = true
    }
*/

/*
    "Interfaces are types that just declare behavior. This behavior is never implemented by the interface 
    directly, but instead by user-defined types via methods. When a user-defined type implements the set 
    of methods declared by an interface type, values of the user-defined type can be assigned to values 
    of the interface type. This assignment stores the value of the user-defined type into the interface
    value.
    
    If a method call is made against an interface value, the equivalent method for the stored user-defined
    value is executed. Since any user-defined type can implement any interface, method calls against an 
    interface value are polymorphic in nature. The user-defined type in this relationship is often called
    a concrete type, since interface values have no concrete behavior without the implementation of the 
    store user-efined value."

    - Bill Kennedy

*/